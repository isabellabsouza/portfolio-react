import { useEffect, useState, useMemo } from "react";
import { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import Particles from "@tsparticles/react";

export default function ParticlesBg() {

    const [init, setInit] = useState(false);

    useEffect(() => {
        initParticlesEngine(async (engine) => {
            await loadSlim(engine);
        }).then(() => {
            setInit(true);
        });
    }, []);

    const particlesOptions = useMemo(
        () => ({
            background: {
                color: { value: "black" },
            },
            fpsLimit: 120,
            interactivity: {
                events: {
                    onClick: { enable: true, mode: "push" },
                    onHover: { enable: true, mode: "bubble" },
                },
                modes: {
                    push: { quantity: 4 },
                    bubble: {
                        "distance": 182.24083328608577,
                        "size": 6,
                        "duration": 5.183739257915328,
                        "opacity": 8,
                        "speed": 3
                    },
                },
            },
            particles: {
                color: { value: "#ffffff" },
                links: {
                    color: "#ffffff",
                    distance: 150,
                    enable: false,
                    opacity: 0.5,
                    width: 1,
                },
                move: {
                    enable: true,
                    outModes: { default: "bounce" },
                    speed: 2,
                },
                number: {
                    density: { enable: true },
                    value: 150,
                },
                opacity: { value: 0.7 },
                shape: { type: "star" },
                size: { value: { min: 1, max: 3 } },
            },
            detectRetina: true,
        }),
        []
    );

    return (
        <>
        { init && (
            <Particles id="tsparticles" options={particlesOptions} />
        )}
        </>
    )
}