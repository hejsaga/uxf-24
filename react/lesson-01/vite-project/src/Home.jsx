const Home = () => {
  const students = [
    { name: "Saga", age: 30 },
    { name: "Student 2", age: 20 },
  ];

  return (
    <>
      <h1>This is home page</h1>

      {students.map((student) => (
        <p key={student.name}>{student.name}</p>
      ))}
    </>
  );
};

export default Home;
