import React, { useState } from "react";
import PageHeader from "../../../components/PageHeader";
import "./Chat.module.css";

const Chat = () => {
  const [activeTab, setActiveTab] = useState("chat");
  const [message, setMessage] = useState("");
  const [activeChat, setActiveChat] = useState(1); // Track currently active chat

  // Chat contacts data with different users
  const chatContacts = [
    {
      id: 1,
      name: "Doni Canra",
      avatar: "/assets/images/users/17.jpg",
      status: "success",
      lastMessage: "Lagi apa?",
      lastSeen: "2 mins",
    },
    {
      id: 2,
      name: "Sarah Johnson",
      avatar: "/assets/images/users/2.jpg",
      status: "danger",
      lastMessage: "Meeting at 3pm",
      lastSeen: "30 mins",
    },
    {
      id: 3,
      name: "Michael Wong",
      avatar: "/assets/images/users/5.jpg",
      status: "success",
      lastMessage: "Files received, thanks!",
      lastSeen: "1 hour",
    },
    {
      id: 4,
      name: "Lisa Ray",
      avatar: "/assets/images/users/7.jpg",
      status: "danger",
      lastMessage: "Let's catch up soon",
      lastSeen: "2 days",
    },
  ];

  // Contact list data
  const contactList = [
    {
      id: 1,
      name: "Doni Canra",
      email: "donicanrarofikar@gmail.com",
      avatar: "/assets/images/users/17.jpg",
    },
    {
      id: 2,
      name: "Sarah Johnson",
      email: "sarah.johnson@example.com",
      avatar: "/assets/images/users/2.jpg",
    },
    {
      id: 3,
      name: "Michael Wong",
      email: "michael.wong@example.com",
      avatar: "/assets/images/users/5.jpg",
    },
    {
      id: 4,
      name: "Lisa Ray",
      email: "lisa.ray@example.com",
      avatar: "/assets/images/users/7.jpg",
    },
  ];

  // Messages data for each chat
  const chatMessages = {
    1: [
      {
        id: 1,
        text: "Hai, apa kabar? Sudah lama kita tidak berkomunikasi.",
        time: "20/05/2024 at 09:00",
        avatar: "/assets/images/users/2.jpg",
        isMe: false,
      },
      {
        id: 2,
        text: "Baik banget! Iya nih, akhir-akhir ini sibuk banget sama kerjaan. Kamu gimana?",
        time: "20/05/2024 at 09:02",
        avatar: "/assets/images/users/17.jpg",
        isMe: true,
      },
      {
        id: 3,
        text: "Alhamdulillah baik juga. Aku kemarin baru pulang dari liburan ke Bali. Seru banget!",
        time: "20/05/2024 at 09:05",
        avatar: "/assets/images/users/2.jpg",
        isMe: false,
      },
    ],
    2: [
      {
        id: 1,
        text: "Hi Doni, about the project deadline",
        time: "19/05/2024 at 14:30",
        avatar: "/assets/images/users/2.jpg",
        isMe: false,
      },
      {
        id: 2,
        text: "Yes Sarah, I'll have it ready by tomorrow",
        time: "19/05/2024 at 14:35",
        avatar: "/assets/images/users/17.jpg",
        isMe: true,
      },
      {
        id: 3,
        text: "Great! Let's meet at 3pm to review",
        time: "19/05/2024 at 14:36",
        avatar: "/assets/images/users/2.jpg",
        isMe: false,
      },
    ],
    3: [
      {
        id: 1,
        text: "Hey Doni, did you get those files I sent?",
        time: "18/05/2024 at 11:20",
        avatar: "/assets/images/users/5.jpg",
        isMe: false,
      },
      {
        id: 2,
        text: "Yes Michael, I received them. Thanks!",
        time: "18/05/2024 at 11:25",
        avatar: "/assets/images/users/17.jpg",
        isMe: true,
      },
    ],
    4: [
      {
        id: 1,
        text: "Long time no see! How have you been?",
        time: "15/05/2024 at 10:00",
        avatar: "/assets/images/users/7.jpg",
        isMe: false,
      },
      {
        id: 2,
        text: "I've been good! We should catch up soon",
        time: "15/05/2024 at 10:05",
        avatar: "/assets/images/users/17.jpg",
        isMe: true,
      },
    ],
  };

  const handleChatSelect = (chatId) => {
    setActiveChat(chatId);
  };

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!message.trim()) return;

    setMessage((prevChats) => ({
      ...prevChats,
      [activeChat]: [
        ...(prevChats[activeChat] || []),
        {
          id: new Date().getTime(),
          text: message,
          time: new Date().toLocaleTimeString(),
          isMe: true,
        },
      ],
    }));

    setMessage("");
  };

  return (
    <div>
      <PageHeader title="Chat" />

      <div className="row">
        <div className="col-md-12">
          <div className="card overflow-hidden">
            <div className="tile tile-alt mb-0" id="messages-main">
              {/* Left Sidebar */}
              <div className="ms-menu">
                <div className="tab-menu-heading border-top-0">
                  <div className="tabs-menu1">
                    <ul className="nav">
                      <li>
                        <a href="#tab-7" className={activeTab === "chat" ? "active" : ""} data-bs-toggle="tab" onClick={() => setActiveTab("chat")}>
                          Chat
                        </a>
                      </li>
                      <li className="m-0">
                        <a href="#tab-8" className={activeTab === "contacts" ? "active" : ""} data-bs-toggle="tab" onClick={() => setActiveTab("contacts")}>
                          Contacts
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Chat Contacts List */}
                {activeTab === "chat" && (
                  <div
                    className={`tab-pane ${activeTab === "chat" ? "active" : ""}`}
                    id="tab-7"
                    style={{
                      maxHeight: "500px",
                      height: "500px",
                      overflowY: "auto",
                      scrollBehavior: "smooth",
                    }}
                  >
                    <ul className="list-group lg-alt chat-conatct-list" id="ChatList">
                      {chatContacts.map((contact) => (
                        <li key={contact.id} className={`list-group-item media p-4 mt-0 border-0 ${activeChat === contact.id ? "active-chat" : ""}`} onClick={() => handleChatSelect(contact.id)} style={{ cursor: "pointer" }}>
                          <div>
                            <div className="float-start pe-2">
                              <img src={contact.avatar} alt="" className="avatar avatar-md brround" />
                            </div>
                            <div className="media-body">
                              <div className="list-group-item-heading text-default font-weight-semibold">
                                {contact.name}
                                <span className={`dot-label bg-${contact.status} ms-2 w-2 h-2`}></span>
                              </div>
                              <small className="list-group-item-text text-muted">{contact.lastMessage}</small>
                            </div>
                            <span className="chat-time text-muted">{contact.lastSeen}</span>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Contact List */}
                {activeTab === "contacts" && (
                  <div
                    className={`tab-pane ${activeTab === "contacts" ? "active" : ""}`}
                    id="tab-8"
                    style={{
                      maxHeight: "500px",
                      height: "500px",
                      overflowY: "auto",
                      scrollBehavior: "smooth",
                    }}
                  >
                    <ul className="list-group lg-alt chat-conatct-list" id="ChatList2">
                      {contactList.map((contact) => (
                        <li key={contact.id} className="list-group-item media p-4 border-0 mt-0">
                          <div className="contact-href"></div>
                          <div className="float-start pe-2">
                            <img src={contact.avatar} alt="" className="avatar avatar-md brround" />
                          </div>
                          <div className="media-body">
                            <div className="list-group-item-heading text-default font-weight-semibold">{contact.name}</div>
                            <small className="list-group-item-text text-muted">{contact.email}</small>
                          </div>
                          <div className="ms-auto">
                            <ContactDropdownMenu />
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              {/* Right Chat Area */}
              <div className="ms-body" style={{ width: "1100px" }}>
                <ChatHeader contact={chatContacts.find((c) => c.id === activeChat)} />

                <div
                  className="chat-body-style"
                  id="ChatBody"
                  style={{
                    maxHeight: "500px",
                    height: "500px",
                    overflowY: "auto",
                    scrollBehavior: "smooth",
                  }}
                >
                  {chatMessages[activeChat]?.map((msg) => (
                    <div key={msg.id} className={`message-feed ${msg.isMe ? "right" : "media mt-0"}`} style={{ width: "100%" }}>
                      {!msg.isMe && (
                        <div className="float-startpe-2">
                          <img src={msg.avatar} alt="" className="avatar avatar-md brround" />
                        </div>
                      )}
                      {msg.isMe && (
                        <div className="float-end ps-2">
                          <img src={msg.avatar} alt="" className="avatar avatar-md brround" />
                        </div>
                      )}
                      <div className="media-body">
                        <div className="mf-content">{msg.text}</div>
                        <small className="mf-date">
                          <i className="fa fa-clock-o"></i> {msg.time}
                        </small>
                      </div>
                    </div>
                  ))}
                </div>

                <form onSubmit={handleSendMessage} className="msb-reply">
                  <textarea placeholder="What's on your mind..." value={message} onChange={(e) => setMessage(e.target.value)} />
                  <button type="submit" className="btn br-7">
                    <i className="fa fa-paper-plane-o text-muted"></i>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Updated ChatHeader to show active contact
const ChatHeader = ({ contact }) => {
  return (
    <div className="action-header clearfix">
      <div className="float-start hidden-xs d-flex ms-0 chat-user">
        <img src={contact?.avatar || "/assets/images/users/17.jpg"} alt="" className="avatar avatar-lg brround me-2" />
        <div className="align-items-center mt-1">
          <p className="font-weight-bold mb-0 fs-16">{contact?.name || "Select a chat"}</p>
          <span>
            <span className={`dot-label bg-${contact?.status || "success"} me-2 w-2 h-2`}></span>
            {contact?.status === "success" ? "online" : "offline"}
          </span>
        </div>
      </div>
      <ul className="ah-actions actions align-items-center">
        <li>
          <div className="br-7">
            <i style={{ fontSize: "24px" }} className="fe fe-phone text-muted"></i>
          </div>
        </li>
        <li className="dropdown">
          <div data-bs-toggle="dropdown" className="option-dots br-7">
            <i className="fe fe-more-vertical"></i>
          </div>
          <ul
            className="dropdown-menu dropdown-menu-start shadow-sm"
            style={{
              minWidth: "180px",
              border: "1px solid rgba(0,0,0,0.05)",
              borderRadius: "6px",
              padding: "4px 0",
              marginTop: "8px",
            }}
          >
            <li>
              <div
                className="dropdown-item d-flex align-items-center py-2 px-3"
                style={{
                  fontSize: "14px",
                  color: "#495057",
                  transition: "all 0.2s",
                }}
              >
                {/* <i className="fe fe-sync me-2" style={{ width: "18px" }}></i> */}
                <span>Refresh</span>
              </div>
            </li>
            <li>
              <div
                className="dropdown-item d-flex align-items-center py-2 px-3"
                style={{
                  fontSize: "14px",
                  color: "#495057",
                  transition: "all 0.2s",
                }}
              >
                {/* <i className="fe fe-email me-2" style={{ width: "18px" }}></i> */}
                <span>Message Settings</span>
              </div>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
};

// Contact Dropdown Menu Component
const ContactDropdownMenu = () => {
  return (
    <div className="dropdown">
      <div
        data-bs-toggle="dropdown"
        className="option-dots d-flex align-items-center justify-content-center"
        style={{
          width: "24px",
          height: "24px",
          cursor: "pointer",
          borderRadius: "4px",
          transition: "background-color 0.2s",
        }}
      >
        <i className="fe fe-more-vertical fs-18 text-muted"></i>
      </div>

      <ul
        className="dropdown-menu dropdown-menu-start shadow-sm"
        style={{
          minWidth: "180px",
          border: "1px solid rgba(0,0,0,0.05)",
          borderRadius: "6px",
          padding: "4px 0",
          marginTop: "8px",
        }}
      >
        <li>
          <div
            className="dropdown-item d-flex align-items-center py-2 px-3"
            style={{
              fontSize: "14px",
              color: "#495057",
              transition: "all 0.2s",
            }}
          >
            <i className="fe fe-phone-call me-2" style={{ width: "18px" }}></i>
            <span>Call</span>
          </div>
        </li>
        <li>
          <div
            className="dropdown-item d-flex align-items-center py-2 px-3"
            style={{
              fontSize: "14px",
              color: "#495057",
              transition: "all 0.2s",
            }}
          >
            <i className="fe fe-video me-2" style={{ width: "18px" }}></i>
            <span>Videocall</span>
          </div>
        </li>
        <li>
          <div
            className="dropdown-item d-flex align-items-center py-2 px-3"
            style={{
              fontSize: "14px",
              color: "#495057",
              transition: "all 0.2s",
            }}
          >
            <i className="fe fe-mail me-2" style={{ width: "18px" }}></i>
            <span>New Message</span>
          </div>
        </li>
        <li>
          <div
            className="dropdown-item d-flex align-items-center py-2 px-3"
            style={{
              fontSize: "14px",
              color: "#495057",
              transition: "all 0.2s",
            }}
          >
            <i className="fe fe-settings me-2" style={{ width: "18px" }}></i>
            <span>Settings</span>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Chat;
