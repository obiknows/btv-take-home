import type { NextPage } from "next";
import Link from "next/link";
import WatchLayout from "../../components/WatchLayout";

import Card from "../../components/atoms/Card";

const WatchPage: NextPage = () => {
  const rows = 4;
  return (
    <WatchLayout title="Home | Black Oak TV">
      {/* TODO: youtube style layout */}
      <div className="w-full min-h-[2250px] ">
        <div className="grid grid-cols-4 gap-x-4 min-h-[15rem]  mb-8">
          <div className="w-full h-full ">
            <Card img="https://images.unsplash.com/photo-1673557148525-0607550d1212?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80" />
          </div>
          <div className="w-full h-full ">
            <Card img="https://images.unsplash.com/photo-1673470535475-dc0a27714d66?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8MjF8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60" />
          </div>
          <div className="w-full h-full ">
            <Card img="https://images.unsplash.com/photo-1671754735370-6f45ada53f04?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8NjB8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60" />
          </div>
          <div className="w-full h-full ">
            <Card img="https://images.unsplash.com/photo-1589156280159-27698a70f29e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YmxhY2slMjBwZW9wbGV8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60" />
          </div>
        </div>
        <div className="grid grid-cols-4 gap-x-4 min-h-[15rem]  mb-8">
          <div className="w-full h-full ">
            <Card img="https://images.unsplash.com/photo-1543807535-eceef0bc6599?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8YmxhY2slMjBwZW9wbGV8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60" />
          </div>
          <div className="w-full h-full ">
            <Card img="https://images.unsplash.com/photo-1517840933437-c41356892b35?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGJsYWNrJTIwcGVvcGxlJTIwdGFsa2luZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60" />
          </div>
          <div className="w-full h-full ">
            <Card img="https://images.unsplash.com/photo-1607868894064-2b6e7ed1b324?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGJsYWNrJTIwcGVvcGxlJTIwdGFsa2luZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60" />
          </div>
          <div className="w-full h-full ">
            <Card img="https://images.unsplash.com/photo-1589483232748-515c025575bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGJsYWNrJTIwcGVvcGxlJTIwdGFsa2luZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60" />
          </div>
        </div>
        <div className="grid grid-cols-4 gap-x-4 min-h-[15rem]  mb-8">
          <div className="w-full h-full ">
            <Card />
          </div>
          <div className="w-full h-full ">
            <Card />
          </div>
          <div className="w-full h-full ">
            <Card />
          </div>
          <div className="w-full h-full ">
            <Card />
          </div>
        </div>
      </div>
    </WatchLayout>
  );
};

export default WatchPage;
