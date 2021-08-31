export const data = [{
    "url":"https://images.unsplash.com/photo-1615665598671-053520c11811?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NzZ8fGJvb2t8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    "name":"Building an Inclusive Organization",
    "author":"Stephen Frost, Raafi-Karim...",
    "readingTime":"15",
    "totalReads":"17.1k"
  },
  {
    "url":"https://images.unsplash.com/photo-1541963463532-d68292c34b19?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Ym9va3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    "name":"Building an Exclusive Organization",
    "author":"Stephen Frost, Raafi-Karim...",
    "readingTime":"30",
    "totalReads":"1.1k"
  }]

  export const finished = [
    {
      url:
        "https://images.unsplash.com/photo-1541963463532-d68292c34b19?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Ym9va3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      name: "Building an Exclusive Organization",
      author: "Stephen Frost, Raafi-Karim...",
      readingTime: "30",
      totalReads: "1.1k",
      category: "Motivation",
    },
  ]

  localStorage.setItem("finish", JSON.stringify(finished));
  localStorage.setItem("current", JSON.stringify(data));