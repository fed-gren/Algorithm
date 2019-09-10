/**
 * Extract the domain name from a URL
 * 5 kyu
 * https://www.codewars.com/kata/extract-the-domain-name-from-a-url-1/train/javascript
 */

function domainName(url) {
  const splittedProtocol = url.split("://");
  const parsedURL = {};
  if (splittedProtocol.length === 2) {
    parsedURL.protocol = splittedProtocol.shift();
  }
  const splittedDomainName = splittedProtocol[0].split(".");
  let domainName =
    splittedDomainName.length === 2
      ? splittedDomainName[0]
      : splittedDomainName[0] === "www"
      ? splittedDomainName[1]
      : splittedDomainName[0];

  return domainName;
}

//basic test case
console.log(domainName("http://google.com")); // "google"
console.log(domainName("http://google.co.jp")); // "google"
console.log(domainName("www.xakep.ru")); // "xakep"
console.log(domainName("https://youtube.com")); // "youtube"
