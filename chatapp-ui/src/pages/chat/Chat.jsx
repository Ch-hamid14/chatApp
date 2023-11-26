import React, { useState, useRef } from "react";
import { Layout, Menu, message } from "antd";
import { SendOutlined } from "@ant-design/icons";
import { BsEmojiWink } from "react-icons/bs";
import Input from "components/atoms/input";
import io from "socket.io-client";
import { useEffect } from "react";
const { Content, Sider } = Layout;
import "./Chat.css";

const Chat = () => {
  const [incomingMessages, setIncomingMessages] = useState([]);
  const [messageSendingTime,setMessageSendingTime]=useState('');
  const [outgoingMessages, setOutgoingMessages] = useState("");

  const handleSendMessage = () => {
    setOutgoingMessages("");
    socket.emit("message", { content: outgoingMessages, type: "outgoing" });
    setIncomingMessages((prevMessages) => [
      ...prevMessages,
      { content: outgoingMessages, type: "outgoing" },
    ]);
    console.log(incomingMessages);
    setMessageSendingTime(currentTime);
  };
  const handleInputValue = (e) => {
    setOutgoingMessages(e.target.value);
  };

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider
        breakpoint="lg"
        collapsedWidth="0"
        onBreakpoint={(broken) => {
          console.log(broken);
        }}
      >
        <div className="demo-logo-vertical" />
        <Menu theme="dark" />
      </Sider>
      <Content
        style={{
          backgroundColor: "#1F222A",
          padding: 20,
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          overflowY: "auto",
          height: "100vh",
        }}
      >
        <div style={{ width: "100%", overflowY: "auto" }}>
          <Layout style={{ backgroundColor: "#1F222A" }}>
            <div
              style={{
                color: "red",
                backgroundColor: "#1F222A",
                overflow: "hidden",
                gap: 10,
                width: "100%",
              }}
            >
              {incomingMessages.map((message, index) => (
                <div
                  key={index}
                  style={{
                    color: "#FFF",
                    marginBottom: 10,
                  }}
                >
                  <div
                    style={{
                      display: "inline-block",
                      padding: '16px 24px',
                      borderRadius: '8px 20px 20px 20px',
                      backgroundColor: "#35383F",
                      gap:10
                    }}
                  >
                    {message.content}
                  </div>
                </div>
              ))}
              <div>
                {incomingMessages.map((message, index) => (
                  <div
                    key={index}
                    style={{
                      color: "#FFFFFF",
                      textAlign: "right",
                      marginBottom: 10,
                    }}
                  >
                    <div
                      style={{
                        display: "inline-block",
                        padding: '16px 24px',
                        borderRadius: '20px 20px 8px 20px',
                        backgroundColor: "#1BAC4B",
                        textAlign:'left'
                      }}
                    >
                      {message.content}
                      <p style={{fontSize:12,textAlign:'right'}}>{messageSendingTime}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Layout>
        </div>
        <Input
          placeholder="Message"
          style={{ marginBottom: 20, padding: 10 }}
          icon1={<BsEmojiWink size={18} style={{ color: "blue" }} />}
          icon={
            <SendOutlined
              size={"large"}
              rows={6}
              value={outgoingMessages}
              onClick={handleSendMessage}
              style={{ size: 20, color: "blue" }}
            />
          }
          onChange={handleInputValue}
        />
      </Content>
      <Content>
        <h1>Hello</h1>
      </Content>
    </Layout>
  );
};
export default Chat;
