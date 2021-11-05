export function objEach(obj = {}, cb) {
  for (const key in obj) {
    cb(obj[key], key);
  }
}
