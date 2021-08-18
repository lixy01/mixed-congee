/**
 * 文件下载
 * @param data 文件流
 * @param fileName 文件名
 * @param any type 文件流类型
 * @returns {Promise}
 */
export const fileDown = (data, fileName, any = {}) => {
    any = Object.assign({type: 'application/octet-stream;charset=utf-8'}, any)
    return new Promise((resolve, reject) => {
        try {
            const blob = new Blob([data], {
                type: any.type,
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
            resolve()
        } catch (e) {
            reject(e)
        }
    })
}
