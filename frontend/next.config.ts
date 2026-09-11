import type { NextConfig } from "next";
const nextConfig:NextConfig={async redirects(){return [{source:"/",destination:"/en",permanent:true},{source:"/choose",destination:"/en/choose",permanent:true}]}};
export default nextConfig;
