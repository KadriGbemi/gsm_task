const requestData = async (url, method, address) => {
  const data = {
    account:
      "https://gsmtasks.com/api/tasks/accounts/cb57aa97-e4e3-430b-84b4-a93d0b8bdf7a/",
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
      Authorization: "Token c8bd28ffc939c3107838301fff3cc81269434722",
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
export const handleCreateTask = async (address, setLocation) => {
  const response = await requestData(
    "https://gsmtasks.com/api/tasks/tasks/",
    "POST",
    address
  );
  if (response.ok) {
    let data = await response.json();
    if (data && data.url) {
      const timer = setTimeout(async () => {
        const location = await requestData(data.url, "GET");
        if (response.ok) {
          let locationData = await location.json();
          locationData && setLocation(locationData.address);
          clearInterval(timer);
        }
      }, "3000");
    }
  }
};
