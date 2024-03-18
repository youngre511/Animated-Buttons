const prevSet = document.querySelector("#prevSet");
const prevRightTop = document.querySelector("#prevRightT");
const prevRightBottom = document.querySelector("#prevRightB");
const prevLeftTop = document.querySelector("#prevLeftT");
const prevLeftBottom = document.querySelector("#prevLeftB");
const nextSet = document.querySelector("#nextSet");
const nextRightTop = document.querySelector("#nextRightT");
const nextRightBottom = document.querySelector("#nextRightB");
const nextLeftTop = document.querySelector("#nextLeftT");
const nextLeftBottom = document.querySelector("#nextLeftB");

let autoIsOn = false;

const nextBtn = document.querySelector("#next");
const prevBtn = document.querySelector("#prev");
const autoPlayBtn = document.querySelector("#auto-play");
const tl = gsap.timeline();

nextBtn.addEventListener("click", nextSlide);
prevBtn.addEventListener("click", prevSlide);
autoPlayBtn.addEventListener("click", autoplayOnOff);

function nextSlide() {
	tl.to(nextLeftTop, {
		duration: 0.3,
		rotation: -15,
		y: "-12px",
		x: "-5px",
		transformOrigin: "100% 100%",
		ease: "power1.out",
	})
		.to(
			nextLeftBottom,
			{
				duration: 0.3,
				rotation: 15,
				y: "12px",
				x: "5px",
				transformOrigin: "100% 0",
				ease: "power1.out",
			},
			"<"
		)
		.to(
			nextRightTop,
			{
				duration: 0.3,
				rotation: -13,
				y: "-12px",
				transformOrigin: "100% 100%",
				ease: "power1.out",
			},
			"<"
		)
		.to(
			nextRightBottom,
			{
				duration: 0.3,
				rotation: 13,
				y: "12px",
				transformOrigin: "100% 0",
				ease: "power1.out",
			},
			"<"
		)
		.to(nextSet, { duration: 0.3, x: "1200px", ease: "back.in(1.5)" }, "-=.25")
		.set(nextSet, { x: "-1200px" })
		.to(nextSet, { duration: 0.3, x: "0", ease: "power1.out" })
		.to(
			nextLeftTop,
			{ duration: 0.3, rotation: 0, y: "0", ease: "back.out(3)" },
			"-=.2"
		)
		.to(
			nextLeftBottom,
			{ duration: 0.3, rotation: 0, y: "0", ease: "back.out(3)" },
			"<"
		)
		.from(
			nextRightTop,
			{ duration: 0.3, rotation: 0, y: "0", x: "0", ease: "back.out(3)" },
			"<"
		)
		.from(
			nextRightBottom,
			{ duration: 0.3, rotation: 0, y: "0", x: "0", ease: "back.out(3)" },
			"<"
		);
}

function prevSlide() {
	tl.to(prevLeftTop, {
		duration: 0.3,
		rotation: 13,
		y: "-12px",
		transformOrigin: "0 100%",
		ease: "power1.out",
	})
		.to(
			prevLeftBottom,
			{
				duration: 0.3,
				rotation: -13,
				y: "12px",
				transformOrigin: "0 0",
				ease: "power1.out",
			},
			"<"
		)
		.to(
			prevRightTop,
			{
				duration: 0.3,
				rotation: 15,
				y: "-12px",
				x: "5px",
				transformOrigin: "0 100%",
				ease: "power1.out",
			},
			"<"
		)
		.to(
			prevRightBottom,
			{
				duration: 0.3,
				rotation: -15,
				y: "12px",
				x: "5px",
				transformOrigin: "0 0",
				ease: "power1.out",
			},
			"<"
		)
		.to(prevSet, { duration: 0.3, x: "-1200px", ease: "back.in(1.5)" }, "-=.25")
		.set(prevSet, { x: "1200px" })
		.to(prevSet, { duration: 0.3, x: "0", ease: "power1.out" })
		.from(
			prevLeftTop,
			{
				duration: 0.3,
				rotation: 13,
				y: "-12px",
				transformOrigin: "0 100%",
				ease: "back.out(3)",
			},
			"-=.2"
		)
		.from(
			prevLeftBottom,
			{
				duration: 0.3,
				rotation: -13,
				y: "12px",
				transformOrigin: "0 0",
				ease: "back.out(3)",
			},
			"<"
		)
		.from(
			prevRightTop,
			{
				duration: 0.3,
				rotation: 15,
				y: "-12px",
				x: "5px",
				transformOrigin: "0 100%",
				ease: "back.out(3)",
			},
			"<"
		)
		.from(
			prevRightBottom,
			{
				duration: 0.3,
				rotation: -15,
				y: "12px",
				x: "5px",
				transformOrigin: "0 0",
				ease: "back.out(3)",
			},
			"<"
		);
}

function autoplayOnOff() {
	if (!autoIsOn) {
		autoIsOn = true;
		tl.to(document.querySelector("#circle"), {
			duration: 0.4,
			transformOrigin: "50% 50%",
			rotation: 360,
		})
			.to(
				autoPlayBtn,
				{ duration: 0.5, rotationX: 180, ease: "power1.inOut" },
				"-=.3"
			)
			.to(
				document.querySelector("#autoIcon"),
				{ duration: 0, display: "none" },
				"-=0.25"
			)
			.to(
				document.querySelector("#stopIcon"),
				{ duration: 0, display: "inline-block" },
				"-=0.25"
			);
	} else {
		autoIsOn = false;
		tl.set(document.querySelector("#circle"), { rotation: 0 })
			.to(autoPlayBtn, { duration: 0.5, rotationX: 0, ease: "power1.inOut" })
			.to(
				document.querySelector("#stopIcon"),
				{ duration: 0, display: "none" },
				"-=0.25"
			)
			.to(
				document.querySelector("#autoIcon"),
				{ duration: 0, display: "inline-block" },
				"-=0.25"
			);
	}
}
