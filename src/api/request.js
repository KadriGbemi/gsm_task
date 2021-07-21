const requestData = async (url, method, address) => {
  const data = {
    account:
      "https://gsmtasks.com/api/tasks/accounts/c389e543-c394-49dc-ba06-38b3677b939a/",
    address: {
      raw_address: address,
    },
    category: "assignment",
  };
  const options = {
    method: method,
    mode: "cors",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Token 20689cbaa522e0ba4d7ef97e1db2121623d0c47d",
    },
  };
  const response = await fetch(
    url,
    method === "GET"
      ? options
      : {
          ...options,
          body: JSON.stringify(data),
        }
  );
  return response;
};
export const handleCreateTask = async (address, setAddress, setLoading) => {
  const response = await requestData(
    "https://gsmtasks.com/api/tasks/tasks/",
    "POST",
    address
  );
  try {
    if (response.ok) {
      let data = await response.json();
      if (data && data.url) {
        const timer = setTimeout(async () => {
          const location = await requestData(data.url, "GET");
          if (response.ok) {
            let locationData = await location.json();
            locationData &&
              setAddress(locationData.address && locationData.address.location);
            clearInterval(timer);
          }
          setLoading(false);
        }, "3000");
      }
    }
  } catch (err) {
    console.log(err);
  }
};

export const getTaskLists = async () => {
  const response = await requestData(
    "https://gsmtasks.com/api/tasks/tasks/?account=c389e543-c394-49dc-ba06-38b3677b939a",
    "GET"
  );
  const data = await response.json()
  return data
};
