import { useGSAP } from "@gsap/react";
import { animateWithGsap } from "../../utils/animations";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);

import Matter from "matter-js";
import { useEffect, useRef, useState } from "react";
import { useInView } from "react-intersection-observer";

const TriangleLogo = "img/icons/Frame-9.png";
const ParallelogramLogo = "img/icons/Frame-1.png";
const RhombusLogo = "img/icons/Frame-7.png";
const HexagonLogo = "img/icons/Frame-12.png";
const PentagonLogo = "img/icons/Frame-10.png";
const Pentagon1Logo = "img/icons/Frame-11.png";
const Circle1Logo = "img/icons/Frame-14.png";
const Circle2Logo = "img/icons/Frame-15.png";
const Circle3Logo = "img/icons/Frame-16.png";
const Circle4Logo = "img/icons/Frame-17.png";
const Circle5Logo = "img/icons/Frame-19.png";
const Circle6Logo = "img/icons/Frame-20.png";
const SquareLogo = "img/icons/Frame-2.png";
const Square1Logo = "img/icons/Frame-3.png";
const Square2Logo = "img/icons/Frame-4.png";
const Square3Logo = "img/icons/Frame-5.png";
const RectangleLogo = "img/icons/Frame-18.png";
const Rectangle1Logo = "img/icons/Frame-8.png";

const Specialty = () => {
  useGSAP(() => {
    animateWithGsap(".gsapTextSpecialty");
  }, []);

  const { ref, inView } = useInView({ threshold: 0 });
  const [isMobile, setIsMobile] = useState(false); // Use state for isMobile

  useEffect(() => {
    setIsMobile(window.innerWidth <= 768); // Check if the device is mobile
  }, []); // Run this effect only once on mount

  const sceneRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sceneRef.current || !inView) return;

    // Create engine and world
    const engine = Matter.Engine.create();
    const { world } = engine;

    // Set initial gravity
    engine.world.gravity.y = 1;
    engine.world.gravity.x = 0;

    // Add device orientation handling
    const handleOrientation = (event: DeviceOrientationEvent) => {
      if (event.gamma && event.beta) {
        // Convert degrees to gravity scale (normalize between -1 and 1)
        const gravityX = Math.min(Math.max(event.gamma / 45, -1), 1);
        const gravityY = Math.min(Math.max(event.beta / 45, -1), 1);

        engine.world.gravity.x = gravityX;
        engine.world.gravity.y = gravityY;
      }
    };

    // Request permission for device orientation (required for iOS)
    const requestPermission = async () => {
      if (
        typeof DeviceOrientationEvent !== "undefined" &&
        // @ts-expect-error: Property 'requestPermission' does not exist
        typeof DeviceOrientationEvent.requestPermission === "function"
      ) {
        try {
          // @ts-expect-error: Property 'requestPermission' does not exist
          const permission = await DeviceOrientationEvent.requestPermission();
          if (permission === "granted") {
            window.addEventListener("deviceorientation", handleOrientation);
          }
        } catch (error) {
          console.error(
            "Error requesting device orientation permission:",
            error
          );
        }
      } else {
        // For non-iOS devices or when permission is not required
        window.addEventListener("deviceorientation", handleOrientation);
      }
    };

    requestPermission();

    // Create renderer
    const render = Matter.Render.create({
      element: sceneRef.current,
      engine: engine,
      options: {
        width: sceneRef.current?.clientWidth || innerWidth,
        height: 550,
        wireframes: false,
        background: "transparent",
      },
    });

    // Add scroll handling to disable pointer events while scrolling
    let scrollTimeout: ReturnType<typeof setTimeout>;
    const handleScroll = () => {
      render.canvas.style.pointerEvents = "none";
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        render.canvas.style.pointerEvents = "auto";
      }, 200);
    };

    render.canvas.addEventListener("wheel", handleScroll);

    // Add mouse control
    const mouse = Matter.Mouse.create(render.canvas);
    const mouseConstraint = Matter.MouseConstraint.create(engine, {
      mouse: mouse,
      constraint: {
        stiffness: 0.2,
        render: {
          visible: false,
        },
      },
    });

    // Keep mouse in sync with rendering
    render.mouse = mouse;

    // Create container walls
    const wallThickness = 100;
    const containerHeight = 550;
    const walls = [
      // Bottom
      Matter.Bodies.rectangle(
        sceneRef.current?.clientWidth / 2,
        containerHeight + wallThickness / 2,
        sceneRef.current?.clientWidth,
        wallThickness,
        {
          isStatic: true,
          render: {
            fillStyle: "#666",
            opacity: 0.3,
            visible: true,
          },
        }
      ),
      // Left
      Matter.Bodies.rectangle(
        -wallThickness / 2,
        containerHeight / 2,
        wallThickness,
        containerHeight,
        {
          isStatic: true,
          render: {
            fillStyle: "#666",
            opacity: 0.3,
            visible: true,
          },
        }
      ),
      // Right
      Matter.Bodies.rectangle(
        sceneRef.current?.clientWidth + wallThickness / 2,
        containerHeight / 2,
        wallThickness,
        containerHeight,
        {
          isStatic: true,
          render: {
            fillStyle: "#666",
            opacity: 0.3,
            visible: true,
          },
        }
      ),
      // Top
      Matter.Bodies.rectangle(
        sceneRef.current?.clientWidth / 2,
        -wallThickness / 2,
        sceneRef.current?.clientWidth,
        wallThickness,
        {
          isStatic: true,
          render: {
            fillStyle: "#666",
            opacity: 0.3,
            visible: true,
          },
        }
      ),
    ];

    // Create shapes
    const shapes = [
      // Triangle using fromVertices
      Matter.Bodies.fromVertices(
        Math.random() * (window.innerWidth - 100) + 50,
        Math.random() * (containerHeight / 2) + 50,
        [
          [
            { x: 0, y: -65 / (isMobile ? 1.5 : 1) }, // Top point
            { x: 48 / (isMobile ? 1.5 : 1), y: 20 / (isMobile ? 1.5 : 1) }, // Upper right
            { x: -25 / (isMobile ? 1.5 : 1), y: 35 / (isMobile ? 1.5 : 1) }, // Lower left
            { x: -48 / (isMobile ? 1.5 : 1), y: 20 / (isMobile ? 1.5 : 1) }, // Upper left
          ],
        ],
        {
          restitution: 0.6,
          render: {
            sprite: {
              texture: TriangleLogo,
              xScale: 40 / 50 / (isMobile ? 1.5 : 1),
              yScale: 40 / 50 / (isMobile ? 1.5 : 1),
            },
          },
        }
      ),
      // Parallelogram
      Matter.Bodies.fromVertices(
        Math.random() * (window.innerWidth - 100) + 50,
        Math.random() * (containerHeight / 2) + 50,
        [
          [
            { x: -20 / (isMobile ? 1.5 : 1), y: -40 / (isMobile ? 1.5 : 1) }, // Top left
            { x: 60 / (isMobile ? 1.5 : 1), y: -25 / (isMobile ? 1.5 : 1) }, // Top right
            { x: 20 / (isMobile ? 1.5 : 1), y: 40 / (isMobile ? 1.5 : 1) }, // Bottom right
            { x: -60 / (isMobile ? 1.5 : 1), y: 25 / (isMobile ? 1.5 : 1) }, // Bottom left
          ],
        ],
        {
          restitution: 0.6,
          render: {
            sprite: {
              texture: ParallelogramLogo,
              xScale: 45 / 50 / (isMobile ? 1.5 : 1),
              yScale: 45 / 50 / (isMobile ? 1.5 : 1),
            },
          },
        }
      ),
      // Square rotated 45 degrees (diamond shape)
      Matter.Bodies.fromVertices(
        Math.random() * (window.innerWidth - 100) + 50,
        Math.random() * (containerHeight / 2) + 50,
        [
          [
            { x: -42 / (isMobile ? 1.5 : 1), y: -42 / (isMobile ? 1.5 : 1) }, // Top left
            { x: 42 / (isMobile ? 1.5 : 1), y: -42 / (isMobile ? 1.5 : 1) }, // Top right
            { x: 42 / (isMobile ? 1.5 : 1), y: 42 / (isMobile ? 1.5 : 1) }, // Bottom right
            { x: -42 / (isMobile ? 1.5 : 1), y: 42 / (isMobile ? 1.5 : 1) }, // Bottom left
          ],
        ],
        {
          restitution: 0.6,
          frictionAir: 0.001,
          render: {
            sprite: {
              texture: RhombusLogo,
              xScale: 48 / 50 / (isMobile ? 1.5 : 1),
              yScale: 48 / 50 / (isMobile ? 1.5 : 1),
            },
          },
        }
      ),
      // Hexagon using fromVertices
      Matter.Bodies.fromVertices(
        Math.random() * (window.innerWidth - 100) + 50,
        Math.random() * (containerHeight / 2) + 50,
        [
          [
            { x: 0, y: -55 / (isMobile ? 1.5 : 1) }, // Top point
            { x: 48.3 / (isMobile ? 1.5 : 1), y: -30 / (isMobile ? 1.5 : 1) }, // Upper right
            { x: 48.3 / (isMobile ? 1.5 : 1), y: 30 / (isMobile ? 1.5 : 1) }, // Lower right
            { x: 0, y: 55 / (isMobile ? 1.5 : 1) }, // Bottom point
            { x: -48.3 / (isMobile ? 1.5 : 1), y: 30 / (isMobile ? 1.5 : 1) }, // Lower left
            { x: -48.3 / (isMobile ? 1.5 : 1), y: -30 / (isMobile ? 1.5 : 1) }, // Upper left
          ],
        ],
        {
          restitution: 0.6,
          frictionAir: 0.001,
          render: {
            sprite: {
              texture: HexagonLogo,
              xScale: 40 / 50 / (isMobile ? 1.5 : 1),
              yScale: 40 / 50 / (isMobile ? 1.5 : 1),
            },
          },
        }
      ),
      // Pentagon using fromVertices
      Matter.Bodies.fromVertices(
        Math.random() * (window.innerWidth - 100) + 50,
        Math.random() * (containerHeight / 2) + 50,
        [
          [
            { x: 0, y: -40 / (isMobile ? 1.5 : 1) }, // Top point
            { x: 40 / (isMobile ? 1.5 : 1), y: -30 / (isMobile ? 1.5 : 1) }, // Upper right
            { x: 45 / (isMobile ? 1.5 : 1), y: 58 / (isMobile ? 1.5 : 1) }, // Lower right
            { x: -45 / (isMobile ? 1.5 : 1), y: 58 / (isMobile ? 1.5 : 1) }, // Lower left
            { x: -40 / (isMobile ? 1.5 : 1), y: -30 / (isMobile ? 1.5 : 1) }, // Upper left
          ],
        ],
        {
          restitution: 0.6,
          frictionAir: 0.001,
          render: {
            sprite: {
              texture: PentagonLogo,
              xScale: 40 / 50 / (isMobile ? 1.5 : 1),
              yScale: 40 / 50 / (isMobile ? 1.5 : 1),
            },
          },
        }
      ),
      // Pentagon using fromVertices
      Matter.Bodies.fromVertices(
        Math.random() * (window.innerWidth - 100) + 50,
        Math.random() * (containerHeight / 2) + 50,
        [
          [
            { x: 0, y: -40 / (isMobile ? 1.5 : 1) }, // Top point
            { x: 40 / (isMobile ? 1.5 : 1), y: -30 / (isMobile ? 1.5 : 1) }, // Upper right
            { x: 45 / (isMobile ? 1.5 : 1), y: 58 / (isMobile ? 1.5 : 1) }, // Lower right
            { x: -45 / (isMobile ? 1.5 : 1), y: 58 / (isMobile ? 1.5 : 1) }, // Lower left
            { x: -40 / (isMobile ? 1.5 : 1), y: -30 / (isMobile ? 1.5 : 1) }, // Upper left
          ],
        ],
        {
          restitution: 0.6,
          frictionAir: 0.001,
          render: {
            sprite: {
              texture: Pentagon1Logo,
              xScale: 40 / 50 / (isMobile ? 1.5 : 1),
              yScale: 40 / 50 / (isMobile ? 1.5 : 1),
            },
          },
        }
      ),
      // Circle
      Matter.Bodies.circle(
        Math.random() * (window.innerWidth - 100) + 50,
        Math.random() * (containerHeight / 2) + 50,
        50 / (isMobile ? 1.5 : 1), // radius
        {
          restitution: 0.6,
          render: {
            sprite: {
              texture: Circle1Logo,
              xScale: 42 / 50 / (isMobile ? 1.5 : 1),
              yScale: 42 / 50 / (isMobile ? 1.5 : 1),
            },
          },
        }
      ),
      // Circle
      Matter.Bodies.circle(
        Math.random() * (window.innerWidth - 100) + 50,
        Math.random() * (containerHeight / 2) + 50,
        50 / (isMobile ? 1.5 : 1), // radius
        {
          restitution: 0.6,
          render: {
            sprite: {
              texture: Circle2Logo,
              xScale: 42 / 50 / (isMobile ? 1.5 : 1),
              yScale: 42 / 50 / (isMobile ? 1.5 : 1),
            },
          },
        }
      ),
      // Circle
      Matter.Bodies.circle(
        Math.random() * (window.innerWidth - 100) + 50,
        Math.random() * (containerHeight / 2) + 50,
        50 / (isMobile ? 1.5 : 1), // radius
        {
          restitution: 0.6,
          render: {
            sprite: {
              texture: Circle3Logo,
              xScale: 42 / 50 / (isMobile ? 1.5 : 1),
              yScale: 42 / 50 / (isMobile ? 1.5 : 1),
            },
          },
        }
      ),
      // Circle
      Matter.Bodies.circle(
        Math.random() * (window.innerWidth - 100) + 50,
        Math.random() * (containerHeight / 2) + 50,
        50 / (isMobile ? 1.5 : 1), // radius
        {
          restitution: 0.6,
          render: {
            sprite: {
              texture: Circle4Logo,
              xScale: 42 / 50 / (isMobile ? 1.5 : 1),
              yScale: 42 / 50 / (isMobile ? 1.5 : 1),
            },
          },
        }
      ),
      // Circle
      Matter.Bodies.circle(
        Math.random() * (window.innerWidth - 100) + 50,
        Math.random() * (containerHeight / 2) + 50,
        50 / (isMobile ? 1.5 : 1), // radius
        {
          restitution: 0.6,
          render: {
            sprite: {
              texture: Circle5Logo,
              xScale: 42 / 50 / (isMobile ? 1.5 : 1),
              yScale: 42 / 50 / (isMobile ? 1.5 : 1),
            },
          },
        }
      ),
      // Circle
      Matter.Bodies.circle(
        Math.random() * (window.innerWidth - 100) + 50,
        Math.random() * (containerHeight / 2) + 50,
        50 / (isMobile ? 1.5 : 1), // radius
        {
          restitution: 0.6,
          render: {
            sprite: {
              texture: Circle6Logo,
              xScale: 42 / 50 / (isMobile ? 1.5 : 1),
              yScale: 42 / 50 / (isMobile ? 1.5 : 1),
            },
          },
        }
      ),
      // Square
      Matter.Bodies.fromVertices(
        Math.random() * (window.innerWidth - 100) + 50,
        Math.random() * (containerHeight / 2) + 50,
        [
          [
            { x: -47 / (isMobile ? 1.5 : 1), y: -47 / (isMobile ? 1.5 : 1) }, // Top left
            { x: 47 / (isMobile ? 1.5 : 1), y: -47 / (isMobile ? 1.5 : 1) }, // Top right
            { x: 47 / (isMobile ? 1.5 : 1), y: 47 / (isMobile ? 1.5 : 1) }, // Bottom right
            { x: -47 / (isMobile ? 1.5 : 1), y: 47 / (isMobile ? 1.5 : 1) }, // Bottom left
          ],
        ],
        {
          restitution: 0.6,
          frictionAir: 0.001,
          render: {
            sprite: {
              texture: SquareLogo,
              xScale: 40 / 50 / (isMobile ? 1.5 : 1),
              yScale: 40 / 50 / (isMobile ? 1.5 : 1),
            },
          },
        }
      ),
      // Square
      Matter.Bodies.fromVertices(
        Math.random() * (window.innerWidth - 100) + 50,
        Math.random() * (containerHeight / 2) + 50,
        [
          [
            { x: -47 / (isMobile ? 1.5 : 1), y: -47 / (isMobile ? 1.5 : 1) }, // Top left
            { x: 47 / (isMobile ? 1.5 : 1), y: -47 / (isMobile ? 1.5 : 1) }, // Top right
            { x: 47 / (isMobile ? 1.5 : 1), y: 47 / (isMobile ? 1.5 : 1) }, // Bottom right
            { x: -47 / (isMobile ? 1.5 : 1), y: 47 / (isMobile ? 1.5 : 1) }, // Bottom left
          ],
        ],
        {
          restitution: 0.6,
          frictionAir: 0.001,
          render: {
            sprite: {
              texture: Square1Logo,
              xScale: 40 / 50 / (isMobile ? 1.5 : 1),
              yScale: 40 / 50 / (isMobile ? 1.5 : 1),
            },
          },
        }
      ),
      // Square
      Matter.Bodies.fromVertices(
        Math.random() * (window.innerWidth - 100) + 50,
        Math.random() * (containerHeight / 2) + 50,
        [
          [
            { x: -47 / (isMobile ? 1.5 : 1), y: -47 / (isMobile ? 1.5 : 1) }, // Top left
            { x: 47 / (isMobile ? 1.5 : 1), y: -47 / (isMobile ? 1.5 : 1) }, // Top right
            { x: 47 / (isMobile ? 1.5 : 1), y: 47 / (isMobile ? 1.5 : 1) }, // Bottom right
            { x: -47 / (isMobile ? 1.5 : 1), y: 47 / (isMobile ? 1.5 : 1) }, // Bottom left
          ],
        ],
        {
          restitution: 0.6,
          frictionAir: 0.001,
          render: {
            sprite: {
              texture: Square2Logo,
              xScale: 40 / 50 / (isMobile ? 1.5 : 1),
              yScale: 40 / 50 / (isMobile ? 1.5 : 1),
            },
          },
        }
      ),
      // Square
      Matter.Bodies.fromVertices(
        Math.random() * (window.innerWidth - 100) + 50,
        Math.random() * (containerHeight / 2) + 50,
        [
          [
            { x: -47 / (isMobile ? 1.5 : 1), y: -47 / (isMobile ? 1.5 : 1) }, // Top left
            { x: 47 / (isMobile ? 1.5 : 1), y: -47 / (isMobile ? 1.5 : 1) }, // Top right
            { x: 47 / (isMobile ? 1.5 : 1), y: 47 / (isMobile ? 1.5 : 1) }, // Bottom right
            { x: -47 / (isMobile ? 1.5 : 1), y: 47 / (isMobile ? 1.5 : 1) }, // Bottom left
          ],
        ],
        {
          restitution: 0.6,
          frictionAir: 0.001,
          render: {
            sprite: {
              texture: Square3Logo,
              xScale: 40 / 50 / (isMobile ? 1.5 : 1),
              yScale: 40 / 50 / (isMobile ? 1.5 : 1),
            },
          },
        }
      ),
      // Rectangle
      Matter.Bodies.fromVertices(
        Math.random() * (window.innerWidth - 100) + 50,
        Math.random() * (containerHeight / 2) + 50,
        [
          [
            { x: -65 / (isMobile ? 1.5 : 1), y: -25 / (isMobile ? 1.5 : 1) }, // Top left
            { x: 65 / (isMobile ? 1.5 : 1), y: -25 / (isMobile ? 1.5 : 1) }, // Top right
            { x: 65 / (isMobile ? 1.5 : 1), y: 25 / (isMobile ? 1.5 : 1) }, // Bottom right
            { x: -65 / (isMobile ? 1.5 : 1), y: 25 / (isMobile ? 1.5 : 1) }, // Bottom left
          ],
        ],
        {
          restitution: 0.6,
          frictionAir: 0.001,
          render: {
            sprite: {
              texture: RectangleLogo,
              xScale: 38 / 50 / (isMobile ? 1.5 : 1),
              yScale: 38 / 50 / (isMobile ? 1.5 : 1),
            },
          },
        }
      ),
      // Rectangle
      Matter.Bodies.fromVertices(
        Math.random() * (window.innerWidth - 100) + 50,
        Math.random() * (containerHeight / 2) + 50,
        [
          [
            { x: -55 / (isMobile ? 1.5 : 1), y: -35 / (isMobile ? 1.5 : 1) }, // Top left
            { x: 55 / (isMobile ? 1.5 : 1), y: -35 / (isMobile ? 1.5 : 1) }, // Top right
            { x: 55 / (isMobile ? 1.5 : 1), y: 35 / (isMobile ? 1.5 : 1) }, // Bottom right
            { x: -55 / (isMobile ? 1.5 : 1), y: 35 / (isMobile ? 1.5 : 1) }, // Bottom left
          ],
        ],
        {
          restitution: 0.6,
          frictionAir: 0.001,
          render: {
            sprite: {
              texture: Rectangle1Logo,
              xScale: 45 / 50 / (isMobile ? 1.5 : 1),
              yScale: 45 / 50 / (isMobile ? 1.5 : 1),
            },
          },
        }
      ),
    ];

    // Add all bodies to the world
    Matter.Composite.add(world, [...walls, ...shapes, mouseConstraint]);

    // Start the engine and renderer
    Matter.Render.run(render);
    const runner = Matter.Runner.create();
    Matter.Runner.run(runner, engine);

    // Add mouse move handling to make shapes move away from the cursor
    const handleMouseMove = (event: MouseEvent) => {
      const rect = sceneRef.current?.getBoundingClientRect(); // Get the bounding rectangle of the section
      const mouseX = event.clientX - (rect?.left || 0); // Adjust mouseX based on section position
      const mouseY = event.clientY - (rect?.top || 0); // Adjust mouseY based on section position

      shapes.forEach((shape) => {
        const distance = Matter.Vector.magnitude(
          Matter.Vector.sub(shape.position, { x: mouseX, y: mouseY })
        );

        if (distance < 100) {
          // Adjust the distance threshold as needed
          const angle = Math.atan2(
            shape.position.y - mouseY,
            shape.position.x - mouseX
          );
          const forceMagnitude = (100 - distance) / 80; // Adjust force magnitude as needed
          Matter.Body.applyForce(shape, shape.position, {
            x: Math.cos(angle) * forceMagnitude,
            y: Math.sin(angle) * forceMagnitude,
          });
        }
      });
    };

    // Add mouse move event listener
    window.addEventListener("mousemove", handleMouseMove);

    // Cleanup
    return () => {
      Matter.Render.stop(render);
      Matter.Runner.stop(runner);
      render.canvas.removeEventListener("wheel", handleScroll);
      render.canvas.remove();
      Matter.Engine.clear(engine);
      window.removeEventListener("deviceorientation", handleOrientation);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [inView, isMobile]);

  return (
    <section ref={ref} className={style.section}>
      <h2 className={style.title}>Especialidades</h2>
      <div className={style.canvasContainer}>
        <div ref={sceneRef} className={style.physicsContainer} />
      </div>
    </section>
  );
};

const style = {
  section: "flex justify-between common-padding flex-col gap-9",
  title: "gsapTextSpecialty titleAbout",
  canvasContainer:
    "h-[550px] w-full gsapTextSpecialty opacity-0 translate-y-20",
  physicsContainer: "physics-container",
};

export default Specialty;
