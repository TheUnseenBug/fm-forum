export default function HomePage() {

  const mockData = [
    {
      id: 1,
      title: "Title 1",
      content: "Content 1",
    },
    {
      id: 2,
      title: "Title 2",
      content: "Content 2",
    },
    {
      id: 3,
      title: "Title 3",
      content: "Content 3",
    },
    {
      id: 4,
      title: "Title 4",
      content: "Content 4",
    },
    {
      id: 5,
      title: "Title 5",
      content: "Content 5",
    },
  ];
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
      <h2>FM Forum</h2>
      {mockData.map((item) => (
        <div key={item.id} className="m-4 rounded-lg bg-white p-4 text-black">
          <h3>{item.title}</h3>
          <p>{item.content}</p>
        </div>
      ))}
    </main>
  );
}
