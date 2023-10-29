export default function loadBalancer(chinaDownload, USDownload) {
  return Promise.race([chinaDownload, USDownload]); // return the value returned by the promise that resolved the first
}
