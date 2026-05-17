import { SkillDataProvider } from "@/components/sub/skill-data-provider";
import { SkillText } from "@/components/sub/skill-text";

export const Skills = () => {
  return (
    <section
      id="skills"
      style={{ transform: "scale(0.9)" }}
      className="flex flex-col items-center justify-center gap-3 h-full relative overflow-hidden py-20"
    >
      <SkillText />

      {/* Frontend Skills */}
      <div className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-center">
        <SkillDataProvider
          src="html.png"
          name="HTML"
          width={80}
          height={80}
          index={0}
        />

        <SkillDataProvider
          src="css.png"
          name="CSS"
          width={80}
          height={80}
          index={1}
        />

        <SkillDataProvider
          src="js.png"
          name="JavaScript"
          width={80}
          height={80}
          index={2}
        />

        <SkillDataProvider
          src="react.png"
          name="React"
          width={80}
          height={80}
          index={3}
        />

        <SkillDataProvider
          src="tailwind.png"
          name="Tailwind"
          width={80}
          height={80}
          index={4}
        />

        <SkillDataProvider
          src="bootstrap.png"
          name="Bootstrap"
          width={80}
          height={80}
          index={5}
        />
      </div>

      {/* Backend Skills */}
      <div className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-center">
        <SkillDataProvider
          src="php.png"
          name="PHP"
          width={80}
          height={80}
          index={6}
        />

        <SkillDataProvider
          src="laravel.png"
          name="Laravel"
          width={80}
          height={80}
          index={7}
        />

        <SkillDataProvider
          src="mysql.png"
          name="MySQL"
          width={80}
          height={80}
          index={8}
        />

        <SkillDataProvider
          src="next.png"
          name="Next.js"
          width={80}
          height={80}
          index={9}
        />

        <SkillDataProvider
          src="node.png"
          name="Node.js"
          width={80}
          height={80}
          index={10}
        />
      </div>

      {/* Other Skills */}
      <div className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-center">
        <SkillDataProvider
          src="git.png"
          name="Git"
          width={80}
          height={80}
          index={11}
        />

        <SkillDataProvider
          src="postman.png"
          name="Postman"
          width={80}
          height={80}
          index={13}
        />
        <SkillDataProvider
          src="github.png"
          name="GitHub"
          width={80}
          height={80}
          index={12}
        />
      </div>

      <div className="w-full h-full absolute">
        <div className="w-full h-full z-[-10] opacity-30 absolute flex items-center justify-center bg-cover">
          <video
            className="w-full h-auto"
            preload="false"
            playsInline
            loop
            muted
            autoPlay
          >
            <source src="/videos/skills-bg.webm" type="video/webm" />
          </video>
        </div>
      </div>
    </section>
  );
};
