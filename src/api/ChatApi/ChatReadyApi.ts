export const setReady = (cuid: string) => {
    const requestOptions = {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({cuid: cuid, euid: '00b2fcbe-f27f-437b-a0d5-91072d840ed3'})
    };
    return fetch('https://biz.nanosemantics.ru/api/2.1/json/Chat.event', requestOptions).then((response) => response.json());
  }

export const setInit =  (cuid:string, uuid:string) => {
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(cuid.trim() !=='' ? {uuid: uuid, cuid: cuid} : {uuid: uuid})
  };
  return fetch('https://biz.nanosemantics.ru/api/2.1/json/Chat.init', requestOptions).then((response) => response.json());
  }
