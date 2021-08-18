export default function dsFileDown(data,fileName,cb) {

  // 根据返回数据中的type判断是json类型的报错信息还是文件流
  if (data.type === 'application/json') {
    const reader = new FileReader()
    reader.onload = e => {
      const res = JSON.parse(e.target.result)
      cb(res.msg)
    }
    reader.readAsText(data, ['utf-8'])
    return Promise.reject('export error')
  }

  const blob = new Blob([data], {
    type: 'application/octet-stream;charset=utf-8',
  });
  const filename = decodeURI(fileName);
  if ('download' in document.createElement('a')) {
    const downloadElement = document.createElement('a');
    let href = '';
    if (window.URL) href = window.URL.createObjectURL(blob);
    else href = window.webkitURL.createObjectURL(blob);
    downloadElement.href = href;
    downloadElement.download = filename;
    document.body.appendChild(downloadElement);
    downloadElement.click();
    if (window.URL) window.URL.revokeObjectURL(href);
    else window.webkitURL.revokeObjectURL(href);
    document.body.removeChild(downloadElement);
  } else {
    navigator.msSaveBlob(blob, filename);
  }
}
