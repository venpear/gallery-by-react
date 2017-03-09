import config from 'config';

//生成POST、PUT 方式的body 数据
function generateFormData(data) {
  if (!data) {
    return '';
  }

  if (data instanceof FormData) {
    return data;
  }

  const newData = Object.keys(data).map(key => `${key}=${data[key]}`);
  return newData.join('&');
}

//fetch api
function fetchApi(endpoint,parameter) {
  // 设置统一的请求头
  let requestHeader = {
    headers: {
      'Accept': 'application/json',
      "Content-Type": "application/x-www-form-urlencoded;charset=utf-8"
    }
  };
  let request = {
    method: 'GET',
    mode: 'cors',
    redirect: 'follow'
  };
  let origin = config.origin.interior;//获取配置接口地址
  //此处需要根据参数判断加载的 ogigin  暂时没有
  // if (parameter.origin && typeof parameter.origin === 'boolean') {
  //     origin = config.origin.external;
  //   } else if (parameter.origin && parameter.origin instanceof Object) {
  //     origin = parameter.origin
  //   } else if (parameter.origin && parameter.origin instanceof String) {
  //     origin = config.origin[parameter.origin];
  // }


 //判断请求api的操作
  // switch (parameter.method) {
  //     case 'POST':
  //       requestHeader = {
  //           ...requestHeader,
  //          method: "post",
  //          body: generateFormData(parameter.body)
  //       }
  //       break;
  //     case 'PUT':
  //       requestHeader = {
  //         ...requestHeader,
  //         method: "put",
  //         body: generateFormData(parameter.body)
  //       }
  //       break;
  //     case 'DELETE':
  //       requestHeader = {
  //         ...requestHeader,
  //         method: 'delete'
  //       }
  //       break;
  //     case 'GET':
  //       requestHeader = {
  //         ...requestHeader,
  //         method: 'GET'
  //       }
  //       break;
  //     default:
  //   }

  endpoint = `${origin.domain}${endpoint}`;
  return fetch(endpoint,requestHeader).then(response => {
    return response.json();
  }).then(res => {
    return res
  })
}

export default {
  fetchApi:fetchApi()
};
