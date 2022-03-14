import { TIMEOUT_SEC, BF_APIKEY, BF_PARAM_HEADER } from "./config";

var bf_header = new Headers();
bf_header.append("project_id", "mainnetiSXrfNxhpPChKCnts2KX9MJ1eQ7exYgb");

const timeout = function (s) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error(`Request took too long! Timeout after ${s} second`));
    }, s * 1000);
  });
};

export const AJAX = async function (url, uploadData = undefined) {
  try {
    const fetchPro = uploadData
      ? fetch(url, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(uploadData),
        })
      : fetch(url, {
          method: "GET",
          headers: bf_header,
        });

    const res = await Promise.race([fetchPro, timeout(TIMEOUT_SEC)]);
    const data = await res.json();

    if (!res.ok) throw new Error(`${data.message} (${res.status})`);
    return data;
  } catch (err) {
    throw err;
  }
};

// 1 ADA = 1 million de lovelance
export const lovelanceToAda = (lovelance) => lovelance / (1000 * 1000);
