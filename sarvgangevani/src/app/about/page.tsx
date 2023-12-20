export default function Home() {
  return (
    <main className="flex min-h-[100vh] flex-col items-center justify-center min-w-[100vw] bg-gradient-to-b from-[#FFFFFF] to-[#39B5E9]">
      <div className="h-[50vh] text-black text-5xl font-mono font-serif">
        Team AceByteBuilders
      </div>
      <div className="grid grid-cols-6 text-center text-black">
        <div>
          <p style={{ fontFamily: "Times New Roman", fontWeight: "bold" }}>
            Atam Swaroop: Team Lead
          </p>
          <p style={{ fontFamily: "Baskerville Old Face", fontWeight: "bold" }}>
            Description: As the Team Lead, Atam brings a wealth of experience in
            project management and a keen eye for design. She is responsible for
            guiding the team towards achieving project goals and ensuring
            effective communication
          </p>
        </div>
        <div>
          <p style={{ fontFamily: "Times New Roman", fontWeight: "bold" }}>
            Aarat Swaroop
          </p>
          <p style={{ fontFamily: "Baskerville Old Face", fontWeight: "bold" }}>
            Description: Aarat Swaroop is our Backend Developer, specializing in
            creating robust and efficient server-side solutions.
          </p>
        </div>
        <div>
          <p style={{ fontFamily: "Times New Roman", fontWeight: "bold" }}>
            Priyanshu Sharan
          </p>
          <p style={{ fontFamily: "Baskerville Old Face", fontWeight: "bold" }}>
            Description: Priyanshu, as the Frontend Designer Lead, leads the
            visual and interactive design aspects of our projects.
          </p>
        </div>
        <div>
          <p style={{ fontFamily: "Times New Roman", fontWeight: "bold" }}>
            Aarat Prasad
          </p>
          <p style={{ fontFamily: "Baskerville Old Face", fontWeight: "bold" }}>
            Description: Aarat Pd. is a junior member of the frontend design
            team, implementing design concepts into responsive and dynamic user
            interfaces.
          </p>
        </div>
        <div>
          <p style={{ fontFamily: "Times New Roman", fontWeight: "bold" }}>
            Gargi Yadav
          </p>
          <p style={{ fontFamily: "Baskerville Old Face", fontWeight: "bold" }}>
            Description: Gargi, our Junior Designer, plays a crucial role in
            supporting the design team's efforts.
          </p>
        </div>
        <div>
          <p style={{ fontFamily: "Times New Roman", fontWeight: "bold" }}>
            Vanshika Rajpal
          </p>
          <p style={{ fontFamily: "Baskerville Old Face", fontWeight: "bold" }}>
            Description: Vanshika specializes in utilizing Figma to create
            collaborative and efficient design workflows.
          </p>
        </div>
      </div>
    </main>
  );
}
