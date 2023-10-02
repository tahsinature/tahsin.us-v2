import { Context, Next } from "hono";
import telegram from "./telegram";

const active: Record<string, any> = {};

export default async (c: Context, next: Next) => {
  const data = {
    userAgent: c.req.header("user-agent"),
    ip: c.req.header("x-forwarded-for") as string,
    deviceType: getDevice(c.req.header("user-agent")),
  };

  const markDown = `
*New Request*
➡️ IP: ${data.ip}
➡️ Device Type: ${data.deviceType}

IP Lookup:
${await getPlaceByIp(data.ip)}
More: [freegeoip](https://freegeoip.app/json/${data.ip}) • [ip2location](ip2location.com/${data.ip}) • [ipapi](https://ipapi.co/${data.ip}/json/) • [ipinfo](https://ipinfo.io/${data.ip})
`;

  await telegram.send(markDown);
  return next();
};

export const getDevice = (userAgent: string = "") => {
  const ua = userAgent.toLowerCase();

  switch (true) {
    case /iphone|ipod/.test(ua):
      return "iPhone";
    case /tab|ipad/.test(ua):
      return "Tablet";
    case /android/.test(ua):
      return "Android";
    case /mac os/.test(ua):
      return "MacOS";
    case /windows/.test(ua):
      return "Windows";
    case /linux/.test(ua):
      return "CLI";
    case /bot|slurp/.test(ua):
      return "Bot";
    default:
      return userAgent;
  }
};

export const getPlaceByIp = async (ip: string) => {
  const url = `https://ipapi.co/${ip}/json`;
  const resp = await fetch(url);
  const data = await resp.json();
  if (data.error) return `Error: ${data.reason}`;
  else return `${data.city}, ${data.region}, ${data.country_name}, ${data.postal} / ${data.org}`;
};
