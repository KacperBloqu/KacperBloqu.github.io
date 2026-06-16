const defaultExercises = [
	{ id: "e1", name: "Chest Press Machine", category: "Klatka", description: "Siedząc wygodnie na maszynie, dociśnij plecy do oparcia i chwyć rączki na wysokości klatki piersiowej. Wypychaj ciężar przed siebie kontrolując ruch i nie prostując całkowicie łokci. Powoli wracaj do pozycji wyjściowej, czując rozciąganie mięśni." },
	{ id: "e2", name: "Incline Smith Machine Press", category: "Klatka", description: "Ustaw ławkę pod kątem 30-45 stopni pod prowadnicą maszyny Smitha. Chwyć gryf nieco szerzej niż szerokość barków i opuszczaj go powoli do górnej części klatki piersiowej. Dynamicznie wyciśnij ciężar w górę, dbając o stabilne ułożenie stóp na ziemi." },
	{ id: "e3", name: "Butterfly/Pec Deck", category: "Klatka", description: "Usiądź na maszynie dbając o to, by ramiona były ustawione równolegle do podłogi. Ściągaj ramiona do środka skupiając się na maksymalnym skurczu klatki piersiowej na końcu ruchu. Wracaj powoli kontrolując napięcie mięśniowe." },
	{ id: "e4", name: "Overhead Press Machine", category: "Barki", description: "Dociśnij pośladki i plecy do oparcia maszyny pionowej. Wypychaj rączki maszyny w górę nad głowę, unikając pełnego blokowania stawów łokciowych. Opuszczaj ciężar powoli do poziomu uszu." },
	{ id: "e5", name: "Lateral Raise Machine", category: "Barki", description: "Ustaw wysokość siedziska tak, by oś obrotu rąk pasowała do stawów barkowych. Unoś ramiona w bok do poziomu barków, koncentrując ruch na bocznej części aktonu naramiennego. Kontroluj ruch powrotny w dół." },
	{ id: "e6", name: "Triceps Pushdown", category: "Ramiona", description: "Stań lekko pochylony przed wyciągiem górnym i chwyć drążek lub linę. Przyciśnij łokcie do tułowia i wykonaj pełne wyprostowanie ramion w dół, napinając mocno triceps. Wracaj powoli nie pozwalając łokciom na uciekanie do przodu." },
	{ id: "e7", name: "Dips Machine", category: "Ramiona", description: "Usiądź stabilnie na maszynie imitującej pompki na poręczach i mocno oprzyj plecy. Kontrolowanym ruchem naciskaj uchwyty w dół, prostując ramiona i skupiając się na napięciu ramion oraz klatki. Kontroluj fazę powrotną." },
	{ id: "e8", name: "Lat Pulldown", category: "Plecy", description: "Usiądź na maszynie i zablokuj uda o wałki stabilizujące. Chwyć drążek szerokim nachwytem i ściągaj go kontrolowanym ruchem do górnej części klatki piersiowej, lekko odchylając tułów do tyłu. Inicjuj ruch poprzez ściągnięcie łopatek." },
	{ id: "e9", name: "Seated Cable Row", category: "Plecy", description: "Usiądź ze stopami opartymi o platformę i chwyć wąski uchwyt wyciągu dolnego. Przyciągaj uchwyt do dolnej części brzucha, cofając barki i mocno ściągając łopatki razem. Unikaj nadmiernego kołysania tułowiem." },
	{ id: "e10", name: "Chest-Supported Machine Row", category: "Plecy", description: "Oprzyj klatkę piersiową stabilnie o poduszkę oparcia maszyny. Chwyć rączki i przyciągaj je w kierunku tułowia, skupiając się na pracy mięśni najszerszych i czworobocznych grzbietu. Powoli wracaj do pozycji wyjściowej." },
	{ id: "e11", name: "Reverse Pec Deck/Face Pulls", category: "Barki", description: "Usiądź przodem do oparcia maszyny Pec Deck lub stań przed wyciągiem z liną. Rozpychaj ramiona w bok i w tył, koncentrując się na pracy tylnego aktonu barków oraz mięśni międzyłopatkowych. Utrzymuj łokcie wysoko." },
	{ id: "e12", name: "Preacher Curl Machine", category: "Ramiona", description: "Usiądź przy modlitewniku maszyny, kładąc całe ramiona na poduszce tak, by pachy przylegały do krawędzi. Wykonaj pełne ugięcie przedramion unosząc uchwyty w stronę barków. Kontroluj fazę opuszczania." },
	{ id: "e13", name: "Cable Hammer Curls", category: "Ramiona", description: "Stań stabilnie przed wyciągiem dolnym z podpiętą liną. Chwyć końce liny chwytem neutralnym i uginaj ramiona w łokciach, utrzymując je nieruchomo przy tułowiu." },
	{ id: "e14", name: "Machine Shrugs", category: "Plecy", description: "Stań prosto chwytając rączki maszyny po bokach ciała. Unoś barki pionowo w górę tak wysoko, jak to możliwe bez rotacji biodrami czy zginania łokci. Przytrzymaj napięcie u góry i powoli opuść ręce." },
	{ id: "e15", name: "Leg Press", category: "Nogi", description: "Usiądź wygodnie na maszynie suwnicy i rozstaw stopy na platformie na szerokość bioder. Zwolnij blokadę i kontrolowanym ruchem opuszczaj ciężar, zginając kolana do kąta około 90 stopni, a następnie dynamicznie wyciśnij platformę." },
	{ id: "e16", name: "Hack Squat Machine", category: "Nogi", description: "Oprzyj plecy i barki o poduszki maszyny Hack Squat. Rozstaw stopy na platformie, odblokuj ciężar i wykonaj głęboki przysiad, utrzymując proste plecy i kolana skierowane na zewnątrz. Wróć dynamicznie." },
	{ id: "e17", name: "Leg Seated Extension", category: "Nogi", description: "Usiądź na maszynie tak, by kolana znajdowały się na linii osi obrotu ramienia maszyny, a wałek opierał się na dolnej części piszczeli. Wyprostuj kolana podnosząc ciężar, zatrzymaj na sekundę i powoli opuść." },
	{ id: "e18", name: "Seated Leg Curl", category: "Nogi", description: "Usiądź opierając plecy o oparcie i ułóż stopy na wałku maszyny. Zginaj kolana przyciągając pięty pod pośladki, mocno napinając mięśnie dwugłowe ud. Wracaj powoli kontrolując ruch." },
	{ id: "e19", name: "Calf Raise Machine", category: "Nogi", description: "Ustaw śródstopie na krawędzi platformy maszyny, opierając ramiona pod poduszkami. Obniż maksymalnie pięty, rozciągając łydki, a następnie wykonaj dynamiczny wspiętek na palce z zatrzymaniem." },
	{ id: "e20", name: "Ab Coaster/Machine Crunches", category: "Brzuch", description: "Przyjmij stabilną pozycję na maszynie i przyciągaj kolana lub zginaj tułów za pomocą napięcia mięśni brzucha. Skup się na rolowaniu kręgosłupa i unikaj szarpania. Kontroluj ruch powrotny." }
];

const defaultWorkoutPlans = [
	{
		id: "plan_a",
		name: "Trening A: Góra - Push",
		exercises: [
			{ name: "Chest Press Machine", category: "Klatka", setsCount: 4 },
			{ name: "Incline Smith Machine Press", category: "Klatka", setsCount: 4 },
			{ name: "Butterfly/Pec Deck", category: "Klatka", setsCount: 3 },
			{ name: "Overhead Press Machine", category: "Barki", setsCount: 3 },
			{ name: "Lateral Raise Machine", category: "Barki", setsCount: 4 },
			{ name: "Triceps Pushdown", category: "Ramiona", setsCount: 3 },
			{ name: "Dips Machine", category: "Ramiona", setsCount: 3 }
		]
	},
	{
		id: "plan_b",
		name: "Trening B: Góra - Pull",
		exercises: [
			{ name: "Lat Pulldown", category: "Plecy", setsCount: 4 },
			{ name: "Seated Cable Row", category: "Plecy", setsCount: 4 },
			{ name: "Chest-Supported Machine Row", category: "Plecy", setsCount: 3 },
			{ name: "Reverse Pec Deck/Face Pulls", category: "Barki", setsCount: 4 },
			{ name: "Preacher Curl Machine", category: "Ramiona", setsCount: 3 },
			{ name: "Cable Hammer Curls", category: "Ramiona", setsCount: 3 },
			{ name: "Machine Shrugs", category: "Plecy", setsCount: 3 }
		]
	},
	{
		id: "plan_c",
		name: "Trening C: Dół + Brzuch",
		exercises: [
			{ name: "Leg Press", category: "Nogi", setsCount: 4 },
			{ name: "Hack Squat Machine", category: "Nogi", setsCount: 4 },
			{ name: "Leg Seated Extension", category: "Nogi", setsCount: 3 },
			{ name: "Seated Leg Curl", category: "Nogi", setsCount: 3 },
			{ name: "Calf Raise Machine", category: "Nogi", setsCount: 4 },
			{ name: "Ab Coaster/Machine Crunches", category: "Brzuch", setsCount: 4 }
		]
	}
];

const STORAGE_HISTORY_KEY = "gym_tracker_history_v1";
const STORAGE_EXERCISES_KEY = "gym_tracker_exercises_v1";
const STORAGE_ACTIVE_KEY = "gym_tracker_active_v1";
const STORAGE_PLANS_KEY = "gym_tracker_plans_v1";

let history = JSON.parse(localStorage.getItem(STORAGE_HISTORY_KEY) || "[]");
let exercises = JSON.parse(localStorage.getItem(STORAGE_EXERCISES_KEY) || "null");
if (!exercises) {
	exercises = [...defaultExercises];
	localStorage.setItem(STORAGE_EXERCISES_KEY, JSON.stringify(exercises));
}
let workoutPlans = JSON.parse(localStorage.getItem(STORAGE_PLANS_KEY) || "null");
if (!workoutPlans) {
	workoutPlans = [...defaultWorkoutPlans];
	localStorage.setItem(STORAGE_PLANS_KEY, JSON.stringify(workoutPlans));
}
let activeWorkout = JSON.parse(localStorage.getItem(STORAGE_ACTIVE_KEY) || "null");

let activeTab = "trening";
let activeCategoryFilter = "Wszystkie";
let searchFilterQuery = "";

let calendarYear = new Date().getFullYear();
let calendarMonth = new Date().getMonth();
let selectedCalendarDate = formatDate(new Date());

let timerInterval = null;

function formatDate(date) {
	const d = new Date(date);
	let month = "" + (d.getMonth() + 1);
	let day = "" + d.getDate();
	const year = d.getFullYear();
	if (month.length < 2) month = "0" + month;
	if (day.length < 2) day = "0" + day;
	return [year, month, day].join("-");
}

function init() {
	setupTabs();
	setupWorkoutManager();
	setupReportsManager();
	setupAtlas();
	setupSettings();
	initModalClosing();
	
	if (activeWorkout) {
		restoreActiveWorkout();
	} else {
		updateLastWorkoutBanner();
	}
	
	renderActivePane();
	updateBadgeStatus();
}

function setupTabs() {
	const triggers = document.querySelectorAll("[data-tab-trigger]");
	triggers.forEach(trigger => {
		trigger.addEventListener("click", () => {
			const targetPane = trigger.getAttribute("data-tab-trigger");
			switchTab(targetPane);
		});
	});
}

function switchTab(tabName) {
	activeTab = tabName;
	
	const triggers = document.querySelectorAll("[data-tab-trigger]");
	triggers.forEach(trigger => {
		if (trigger.getAttribute("data-tab-trigger") === tabName) {
			trigger.classList.add("active-nav-item");
		} else {
			trigger.classList.remove("active-nav-item");
		}
	});

	const panes = document.querySelectorAll("[data-tab-pane]");
	panes.forEach(pane => {
		if (pane.getAttribute("data-tab-pane") === tabName) {
			pane.classList.remove("hidden");
		} else {
			pane.classList.add("hidden");
		}
	});

	renderActivePane();
}

function renderActivePane() {
	if (activeTab === "trening") {
		renderWorkoutTab();
	} else if (activeTab === "raporty") {
		renderReportsTab();
	} else if (activeTab === "cwiczenia") {
		renderAtlasTab();
	} else if (activeTab === "ustawienia") {
		renderSettingsTab();
	}
}

function setupWorkoutManager() {
	const btnStart = document.getElementById("btn-start-workout");
	if (btnStart) {
		btnStart.addEventListener("click", () => {
			const inputName = document.getElementById("workout-name-input");
			const workoutName = inputName.value.trim() || "Mój Trening";
			
			activeWorkout = {
				name: workoutName,
				startTime: Date.now(),
				exercises: []
			};
			
			localStorage.setItem(STORAGE_ACTIVE_KEY, JSON.stringify(activeWorkout));
			startTimer();
			showActiveLayout();
			updateBadgeStatus();
			populateWorkoutDropdown();
		});
	}

	const btnAddExercise = document.getElementById("btn-add-exercise-to-workout");
	if (btnAddExercise) {
		btnAddExercise.addEventListener("click", () => {
			if (!activeWorkout) return;
			const selectElement = document.getElementById("exercise-list-dropdown");
			const selectedId = selectElement.value;
			const exerciseObj = exercises.find(e => e.id === selectedId);
			if (exerciseObj) {
				const alreadyAdded = activeWorkout.exercises.some(e => e.exerciseId === selectedId);
				if (alreadyAdded) return;
				
				const initialSets = [];
				for (let s = 0; s < 3; s++) {
					initialSets.push({ weight: "", reps: "" });
				}
				
				activeWorkout.exercises.push({
					instanceId: "inst_" + Date.now() + "_" + Math.floor(Math.random() * 1000),
					exerciseId: exerciseObj.id,
					name: exerciseObj.name,
					category: exerciseObj.category,
					sets: initialSets
				});
				
				localStorage.setItem(STORAGE_ACTIVE_KEY, JSON.stringify(activeWorkout));
				renderActiveWorkoutExercises();
			}
		});
	}

	const btnFinish = document.getElementById("btn-finish-workout");
	if (btnFinish) {
		btnFinish.addEventListener("click", () => {
			if (!activeWorkout) return;
			
			activeWorkout.exercises.forEach(ex => {
				ex.sets.forEach((set, sIndex) => {
					const wInput = document.querySelector(`input[data-set-weight-inst="${ex.instanceId}"][data-set-index="${sIndex}"]`);
					const rInput = document.querySelector(`input[data-set-reps-inst="${ex.instanceId}"][data-set-index="${sIndex}"]`);
					if (wInput) set.weight = wInput.value === "" ? "" : (parseFloat(wInput.value) || 0);
					if (rInput) set.reps = rInput.value === "" ? "" : (parseInt(rInput.value, 10) || 0);
				});
			});

			const elapsedMs = Date.now() - activeWorkout.startTime;
			const durationMin = Math.max(1, Math.floor(elapsedMs / 60000));
			
			let lastWorkoutOfSameType = null;
			for (let i = history.length - 1; i >= 0; i--) {
				if (history[i].name === activeWorkout.name) {
					lastWorkoutOfSameType = history[i];
					break;
				}
			}

			const sanitizedExercises = activeWorkout.exercises.map(ex => {
				const matchedExInPrev = lastWorkoutOfSameType
					? lastWorkoutOfSameType.exercises.find(e => e.name.toLowerCase() === ex.name.toLowerCase())
					: null;

				const sanitizedSets = ex.sets
					.map((s, sIndex) => {
						const w = parseFloat(s.weight);
						const r = parseInt(s.reps, 10);
						const weightVal = isNaN(w) ? 0 : w;
						const repsVal = isNaN(r) ? 0 : r;
						
						let deltaText = "";
						if (matchedExInPrev && matchedExInPrev.sets && matchedExInPrev.sets[sIndex]) {
							const prevSet = matchedExInPrev.sets[sIndex];
							const prevW = parseFloat(prevSet.weight);
							if (!isNaN(prevW)) {
								const diff = weightVal - prevW;
								if (diff > 0) {
									deltaText = `+${diff}kg`;
								} else if (diff < 0) {
									deltaText = `${diff}kg`;
								} else {
									deltaText = "0kg";
								}
							}
						}

						return {
							weight: weightVal,
							reps: repsVal,
							delta: deltaText
						};
					})
					.filter(s => s.weight > 0 || s.reps > 0);

				return {
					...ex,
					sets: sanitizedSets
				};
			}).filter(ex => ex.sets.length > 0);
			
			const finalizedWorkout = {
				id: "work_" + Date.now(),
				name: activeWorkout.name,
				date: formatDate(new Date()),
				startTime: activeWorkout.startTime,
				duration: durationMin,
				exercises: sanitizedExercises
			};
			
			history.push(finalizedWorkout);
			localStorage.setItem(STORAGE_HISTORY_KEY, JSON.stringify(history));
			localStorage.setItem("workout_history", JSON.stringify(history));
			
			activeWorkout = null;
			localStorage.removeItem(STORAGE_ACTIVE_KEY);
			
			const allInputs = document.querySelectorAll("input[data-set-weight-inst], input[data-set-reps-inst]");
			allInputs.forEach(inp => {
				inp.value = "";
			});

			stopTimer();
			showIdleLayout();
			updateBadgeStatus();
			updateLastWorkoutBanner();
			
			switchTab("raporty");
		});
	}
}

function restoreActiveWorkout() {
	startTimer();
	showActiveLayout();
	populateWorkoutDropdown();
	renderActiveWorkoutExercises();
}

function showActiveLayout() {
	document.getElementById("idle-session-card").classList.add("hidden");
	document.getElementById("last-workout-banner").classList.add("hidden");
	document.getElementById("active-session-card").classList.remove("hidden");
	document.getElementById("active-session-name").textContent = activeWorkout.name;
}

function showIdleLayout() {
	document.getElementById("idle-session-card").classList.remove("hidden");
	document.getElementById("last-workout-banner").classList.remove("hidden");
	document.getElementById("active-session-card").classList.add("hidden");
}

function updateLastWorkoutBanner() {
	const labelName = document.getElementById("last-workout-name");
	const labelDate = document.getElementById("last-workout-date");
	
	if (history.length > 0) {
		const last = history[history.length - 1];
		labelName.textContent = `${last.name} (${last.exercises.length} ćw.)`;
		labelDate.textContent = last.date.split("-").reverse().join(".");
	} else {
		labelName.textContent = "Brak historii";
		labelDate.textContent = "--.--.----";
	}
}

function updateBadgeStatus() {
	const dot = document.getElementById("badge-dot");
	const text = document.getElementById("badge-text");
	if (activeWorkout) {
		dot.className = "w-2 h-2 rounded-full bg-[#BFFF00] shadow-[0_0_8px_#BFFF00]";
		text.textContent = "W TRAKCIE";
		text.className = "text-[10px] font-bold text-[#BFFF00] uppercase tracking-wider";
	} else {
		dot.className = "w-2 h-2 rounded-full bg-zinc-600 animate-pulse-subtle";
		text.textContent = "Brak treningu";
		text.className = "text-[10px] font-bold text-[#9BA3AF] uppercase tracking-wider";
	}
}

function startTimer() {
	if (timerInterval) clearInterval(timerInterval);
	
	function refresh() {
		if (!activeWorkout) return;
		const diffMs = Date.now() - activeWorkout.startTime;
		const totalSec = Math.floor(diffMs / 1000);
		const min = Math.floor(totalSec / 60);
		const sec = totalSec % 60;
		
		const displayMin = min < 10 ? "0" + min : min;
		const displaySec = sec < 10 ? "0" + sec : sec;
		
		document.getElementById("workout-timer").textContent = `${displayMin}:${displaySec}`;
	}
	
	refresh();
	timerInterval = setInterval(refresh, 1000);
}

function stopTimer() {
	if (timerInterval) {
		clearInterval(timerInterval);
		timerInterval = null;
	}
	document.getElementById("workout-timer").textContent = "00:00";
}

function populateWorkoutDropdown() {
	const dropdown = document.getElementById("exercise-list-dropdown");
	if (!dropdown) return;
	
	dropdown.innerHTML = "";
	exercises.forEach(e => {
		const option = document.createElement("option");
		option.value = e.id;
		option.textContent = `[${e.category}] ${e.name}`;
		dropdown.appendChild(option);
	});
}

function getPreviousSetData(exerciseName, setIndex) {
	if (!history || history.length === 0) return null;
	for (let i = history.length - 1; i >= 0; i--) {
		const hw = history[i];
		const he = hw.exercises.find(e => e.name.toLowerCase() === exerciseName.toLowerCase());
		if (he && he.sets && he.sets[setIndex]) {
			return he.sets[setIndex];
		}
	}
	return null;
}

function openExerciseModal(name) {
	const exObj = exercises.find(e => e.name.toLowerCase() === name.toLowerCase());
	if (!exObj) return;

	const modal = document.getElementById("exercise-info-modal");
	const modalTitle = document.getElementById("modal-exercise-name");
	const modalCategory = document.getElementById("modal-exercise-category");
	const modalDesc = document.getElementById("modal-exercise-description");

	if (!modal || !modalTitle || !modalCategory || !modalDesc) return;

	modalTitle.textContent = exObj.name;
	modalCategory.textContent = exObj.category;
	modalDesc.textContent = exObj.description || "Dla tego ćwiczenia nie został jeszcze dodany opis techniczny.";

	modal.classList.remove("hidden");
	const card = modal.querySelector(".transform");
	if (card) {
		setTimeout(() => {
			card.classList.remove("scale-95");
			card.classList.add("scale-100");
		}, 10);
	}
}

function initModalClosing() {
	const modal = document.getElementById("exercise-info-modal");
	const btnClose = document.getElementById("btn-close-modal");
	const btnCloseBottom = document.getElementById("btn-close-modal-bottom");

	if (!modal) return;

	const close = () => {
		const card = modal.querySelector(".transform");
		if (card) {
			card.classList.remove("scale-100");
			card.classList.add("scale-95");
		}
		setTimeout(() => {
			modal.classList.add("hidden");
		}, 150);
	};

	if (btnClose) btnClose.addEventListener("click", close);
	if (btnCloseBottom) btnCloseBottom.addEventListener("click", close);

	modal.addEventListener("click", (e) => {
		if (e.target === modal) {
			close();
		}
	});
}

function renderActiveWorkoutExercises() {
	const container = document.getElementById("active-exercises-container");
	if (!container) return;
	
	container.innerHTML = "";
	
	if (activeWorkout.exercises.length === 0) {
		container.innerHTML = `
			<div class="text-center py-6 border border-dashed border-zinc-800 rounded-xl">
				<p class="text-xs text-zinc-500 font-medium">Brak ćwiczeń w tej sesji. Wybierz ćwiczenie z listy powyżej.</p>
			</div>
		`;
		return;
	}

	activeWorkout.exercises.forEach((item, index) => {
		const block = document.createElement("div");
		block.className = "bg-[#1A1D23]/80 border border-white/5 rounded-xl p-4 space-y-4";
		
		const titleRow = document.createElement("div");
		titleRow.className = "flex items-center justify-between border-b border-white/5 pb-2.5";
		titleRow.innerHTML = `
			<div class="flex items-center gap-2">
				<div>
					<span class="text-[9px] font-extrabold text-[#BFFF00] uppercase tracking-wider">${item.category}</span>
					<h4 class="text-xs font-bold text-white">${item.name}</h4>
				</div>
				<button class="text-zinc-500 hover:text-[#BFFF00] p-1 transition-colors flex items-center justify-center rounded bg-white/5 border border-white/5 hover:border-[#BFFF00]/20" data-info-exercise="${item.name}">
					<svg class="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
						<circle cx="12" cy="12" r="10" />
						<line x1="12" y1="16" x2="12" y2="12" />
						<line x1="12" y1="8" x2="12.01" y2="8" />
					</svg>
				</button>
			</div>
			<button class="text-zinc-500 hover:text-red-400 p-1 transition-colors" data-remove-exercise="${item.instanceId}">
				<svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
					<polyline points="3 6 5 6 21 6" />
					<path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
				</svg>
			</button>
		`;
		
		block.appendChild(titleRow);

		const setsContainer = document.createElement("div");
		setsContainer.className = "space-y-3";

		if (item.sets.length > 0) {
			const setHeader = document.createElement("div");
			setHeader.className = "grid grid-cols-12 gap-3 text-[9px] font-extrabold text-zinc-500 uppercase tracking-widest text-center";
			setHeader.innerHTML = `
				<span class="col-span-2 text-left">Seria</span>
				<span class="col-span-5">Ciężar (kg)</span>
				<span class="col-span-5">Powtórzenia</span>
			`;
			setsContainer.appendChild(setHeader);
			
			item.sets.forEach((set, sIndex) => {
				const prevSet = getPreviousSetData(item.name, sIndex);
				const prevWeightText = prevSet ? `Poprz.: ${prevSet.weight} kg` : "Brak poprzednich danych";
				const prevRepsText = prevSet ? `Poprz.: ${prevSet.reps} powt.` : "Brak poprzednich danych";

				const row = document.createElement("div");
				row.className = "grid grid-cols-12 gap-3 items-center";
				row.innerHTML = `
					<div class="col-span-2 flex items-center h-8">
						<span class="font-mono text-xs text-zinc-400 font-bold">#${sIndex + 1}</span>
					</div>
					
					<div class="col-span-5 space-y-1">
						<div class="relative flex items-center">
							<input type="number" 
								class="w-full bg-[#0F1115] border border-white/10 rounded-lg px-2.5 py-1.5 text-xs text-white text-center font-bold focus:outline-none focus:border-[#BFFF00] transition-colors" 
								placeholder="0" 
								value="${set.weight !== undefined ? set.weight : ""}"
								data-set-weight-inst="${item.instanceId}" 
								data-set-index="${sIndex}" />
							<span class="absolute right-2 text-[9px] font-bold text-zinc-600 uppercase select-none">kg</span>
						</div>
						<span class="text-[9px] text-zinc-500 block text-center truncate px-1 transition-colors select-none" style="opacity: 0.8;">
							${prevWeightText}
						</span>
					</div>
					
					<div class="col-span-5 space-y-1">
						<div class="relative flex items-center">
							<input type="number" 
								class="w-full bg-[#0F1115] border border-white/10 rounded-lg px-2.5 py-1.5 text-xs text-white text-center font-bold focus:outline-none focus:border-[#BFFF00] transition-colors" 
								placeholder="0" 
								value="${set.reps !== undefined ? set.reps : ""}"
								data-set-reps-inst="${item.instanceId}" 
								data-set-index="${sIndex}" />
							<span class="absolute right-[6px] sm:right-2 text-[9px] font-bold text-zinc-600 uppercase select-none">powt</span>
						</div>
						<span class="text-[9px] text-zinc-500 block text-center truncate px-1 transition-colors select-none" style="opacity: 0.8;">
							${prevRepsText}
						</span>
					</div>
				`;
				setsContainer.appendChild(row);
			});
		} else {
			setsContainer.innerHTML = `<p class="text-[11px] text-zinc-500 italic text-center py-2">Brak serii. Dodaj serię przyciskiem poniżej.</p>`;
		}

		block.appendChild(setsContainer);

		const actionRow = document.createElement("div");
		actionRow.className = "flex items-center gap-2 pt-2 border-t border-white/5";
		actionRow.innerHTML = `
			<button class="flex-1 bg-white/5 hover:bg-white/10 active:bg-white/15 text-white/80 font-bold text-[10px] uppercase tracking-wider py-1.5 px-3 rounded-lg border border-white/5 hover:border-white/10 transition-all flex items-center justify-center gap-1" data-add-set-to-exercise="${item.instanceId}">
				<svg class="w-3 h-3 text-[#BFFF00]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19" /><line x1="5" y1="12" x2="19" y2="12" /></svg>
				Dodaj Serię
			</button>
			${item.sets.length > 0 ? `
			<button class="flex-1 bg-white/5 hover:bg-red-500/10 hover:text-red-400 text-zinc-500 font-bold text-[10px] uppercase tracking-wider py-1.5 px-3 rounded-lg border border-white/5 hover:border-red-500/15 transition-all flex items-center justify-center gap-1" data-remove-last-set-exercise="${item.instanceId}">
				<svg class="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="5" y1="12" x2="19" y2="12" /></svg>
				Usuń Serię
			</button>
			` : ""}
		`;
		block.appendChild(actionRow);

		container.appendChild(block);
	});

	attachActiveWorkoutEventListeners();
}

function attachActiveWorkoutEventListeners() {
	const removeExButtons = document.querySelectorAll("[data-remove-exercise]");
	removeExButtons.forEach(btn => {
		btn.addEventListener("click", () => {
			const instId = btn.getAttribute("data-remove-exercise");
			activeWorkout.exercises = activeWorkout.exercises.filter(e => e.instanceId !== instId);
			localStorage.setItem(STORAGE_ACTIVE_KEY, JSON.stringify(activeWorkout));
			renderActiveWorkoutExercises();
		});
	});

	const weightInputs = document.querySelectorAll("[data-set-weight-inst]");
	weightInputs.forEach(input => {
		input.addEventListener("input", () => {
			const instId = input.getAttribute("data-set-weight-inst");
			const sIndex = parseInt(input.getAttribute("data-set-index"), 10);
			const exercise = activeWorkout.exercises.find(e => e.instanceId === instId);
			if (exercise && exercise.sets[sIndex]) {
				exercise.sets[sIndex].weight = input.value === "" ? "" : (parseFloat(input.value) || 0);
				localStorage.setItem(STORAGE_ACTIVE_KEY, JSON.stringify(activeWorkout));
			}
		});
	});

	const repsInputs = document.querySelectorAll("[data-set-reps-inst]");
	repsInputs.forEach(input => {
		input.addEventListener("input", () => {
			const instId = input.getAttribute("data-set-reps-inst");
			const sIndex = parseInt(input.getAttribute("data-set-index"), 10);
			const exercise = activeWorkout.exercises.find(e => e.instanceId === instId);
			if (exercise && exercise.sets[sIndex]) {
				exercise.sets[sIndex].reps = input.value === "" ? "" : (parseInt(input.value, 10) || 0);
				localStorage.setItem(STORAGE_ACTIVE_KEY, JSON.stringify(activeWorkout));
			}
		});
	});

	const addSetButtons = document.querySelectorAll("[data-add-set-to-exercise]");
	addSetButtons.forEach(btn => {
		btn.addEventListener("click", () => {
			const instId = btn.getAttribute("data-add-set-to-exercise");
			const exercise = activeWorkout.exercises.find(e => e.instanceId === instId);
			if (exercise) {
				exercise.sets.push({ weight: "", reps: "" });
				localStorage.setItem(STORAGE_ACTIVE_KEY, JSON.stringify(activeWorkout));
				renderActiveWorkoutExercises();
			}
		});
	});

	const removeLastSetButtons = document.querySelectorAll("[data-remove-last-set-exercise]");
	removeLastSetButtons.forEach(btn => {
		btn.addEventListener("click", () => {
			const instId = btn.getAttribute("data-remove-last-set-exercise");
			const exercise = activeWorkout.exercises.find(e => e.instanceId === instId);
			if (exercise && exercise.sets.length > 0) {
				exercise.sets.pop();
				localStorage.setItem(STORAGE_ACTIVE_KEY, JSON.stringify(activeWorkout));
				renderActiveWorkoutExercises();
			}
		});
	});

	const infoButtons = document.querySelectorAll("[data-info-exercise]");
	infoButtons.forEach(btn => {
		btn.addEventListener("click", () => {
			const name = btn.getAttribute("data-info-exercise");
			openExerciseModal(name);
		});
	});
}

function renderWorkoutTab() {
	if (activeWorkout) {
		renderActiveWorkoutExercises();
	} else {
		showIdleLayout();
		updateLastWorkoutBanner();
		renderPresetPlans();
	}
}

function renderPresetPlans() {
	const container = document.getElementById("preset-plans-list");
	if (!container) return;
	
	container.innerHTML = "";
	workoutPlans.forEach(plan => {
		const button = document.createElement("button");
		button.className = "w-full text-left bg-white/5 hover:bg-white/10 border border-white/5 rounded-xl p-3 flex items-center justify-between transition-all group";
		button.innerHTML = `
			<div>
				<h5 class="text-xs font-bold text-white group-hover:text-[#BFFF00] transition-colors">${plan.name}</h5>
				<p class="text-[10px] text-[#9BA3AF]">${plan.exercises.length} ćw.</p>
			</div>
			<div class="w-7 h-7 rounded-full bg-white/5 flex items-center justify-center text-[#9BA3AF] group-hover:text-black group-hover:bg-[#BFFF00] transition-all">
				<svg class="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
					<polygon points="6 3 20 12 6 21 6 3" />
				</svg>
			</div>
		`;
		button.addEventListener("click", () => {
			startWorkoutFromPlan(plan.id);
		});
		container.appendChild(button);
	});
}

function startWorkoutFromPlan(planId) {
	const plan = workoutPlans.find(p => p.id === planId);
	if (!plan) return;
	
	activeWorkout = {
		name: plan.name,
		startTime: Date.now(),
		exercises: []
	};
	
	plan.exercises.forEach(pe => {
		const matchedInCatalog = exercises.find(e => e.name.toLowerCase() === pe.name.toLowerCase());
		const finalCategory = matchedInCatalog ? matchedInCatalog.category : (pe.category || "Inne");
		const exerciseId = matchedInCatalog ? matchedInCatalog.id : "custom_" + Date.now() + "_" + Math.floor(Math.random() * 1000);
		
		const setsCount = pe.setsCount || 3;
		const sets = [];
		for (let s = 0; s < setsCount; s++) {
			sets.push({ weight: "", reps: "" });
		}
		
		activeWorkout.exercises.push({
			instanceId: "inst_" + Date.now() + "_" + Math.floor(Math.random() * 100000),
			exerciseId: exerciseId,
			name: pe.name,
			category: finalCategory,
			sets: sets
		});
	});
	
	localStorage.setItem(STORAGE_ACTIVE_KEY, JSON.stringify(activeWorkout));
	startTimer();
	showActiveLayout();
	updateBadgeStatus();
	populateWorkoutDropdown();
	renderActiveWorkoutExercises();
}

function setupReportsManager() {
	const btnPrev = document.getElementById("btn-prev-month");
	if (btnPrev) {
		btnPrev.addEventListener("click", () => {
			calendarMonth--;
			if (calendarMonth < 0) {
				calendarMonth = 11;
				calendarYear--;
			}
			renderCalendar();
		});
	}

	const btnNext = document.getElementById("btn-next-month");
	if (btnNext) {
		btnNext.addEventListener("click", () => {
			calendarMonth++;
			if (calendarMonth > 11) {
				calendarMonth = 0;
				calendarYear++;
			}
			renderCalendar();
		});
	}
}

function renderReportsTab() {
	renderCalendar();
	calculateStats();
	renderSelectedDayWorkouts();
	renderRecentWorkoutsAccordion();
}

function renderRecentWorkoutsAccordion() {
	const container = document.getElementById("recent-workouts-accordion");
	if (!container) return;

	container.innerHTML = "";
	
	if (history.length === 0) {
		container.innerHTML = `<p class="italic text-center py-4 text-zinc-500 text-xs">Brak zapisanych sesji treningowych.</p>`;
		return;
	}

	const sorted = [...history].sort((a, b) => b.startTime - a.startTime).slice(0, 8);

	sorted.forEach(workout => {
		const block = document.createElement("div");
		block.className = "border border-white/5 bg-[#1A1D23]/60 rounded-xl overflow-hidden transition-all";
		
		const id = workout.id;
		const beautyDate = workout.date ? workout.date.split("-").reverse().join(".") : new Date(workout.startTime).toLocaleDateString("pl-PL");
		
		let exercisesCount = workout.exercises ? workout.exercises.length : 0;
		let totalSetsCount = 0;
		if (workout.exercises) {
			workout.exercises.forEach(e => {
				totalSetsCount += e.sets ? e.sets.length : 0;
			});
		}

		block.innerHTML = `
			<button class="w-full text-left px-4 py-3 flex items-center justify-between hover:bg-white/5 active:bg-white/10 transition-all select-none" data-accordion-header="${id}">
				<div class="space-y-0.5">
					<h5 class="text-xs font-black text-white hover:text-[#BFFF00] transition-colors uppercase tracking-wider">${workout.name}</h5>
					<p class="text-[10px] text-zinc-500 font-mono">${beautyDate} • ${workout.duration} min • ${exercisesCount} ćw. (${totalSetsCount} serii)</p>
				</div>
				<div class="text-[#9BA3AF] transition-transform duration-200" data-accordion-icon="${id}">
					<svg class="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
						<polyline points="6 9 12 15 18 9" />
					</svg>
				</div>
			</button>
			<div class="hidden border-t border-white/5 p-4 bg-[#0F1115]/50 space-y-4" data-accordion-body="${id}">
				<div class="space-y-3" id="accordion-exercises-${id}"></div>
				<div class="flex items-center justify-between border-t border-white/5 pt-3.5">
					<button class="bg-[#FF453A]/10 hover:bg-[#FF453A]/20 text-[#FF453A] font-extrabold text-[10px] uppercase tracking-wider px-3.5 py-1.5 rounded-lg border border-[#FF453A]/20 hover:border-[#FF453A]/30 transition-all flex items-center gap-1.5" data-delete-workout="${id}">
						<svg class="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
							<polyline points="3 6 5 6 21 6" />
							<path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
						</svg>
						Usuń trening
					</button>
				</div>
			</div>
		`;
		
		container.appendChild(block);

		const exercisesList = block.querySelector(`#accordion-exercises-${id}`);
		if (workout.exercises && workout.exercises.length > 0) {
			workout.exercises.forEach(ex => {
				const row = document.createElement("div");
				row.className = "space-y-1.5";
				
				const setsDetails = ex.sets.map((s, idx) => {
					return `<div class="font-mono text-zinc-400 text-[10px] bg-white/5 px-2.5 py-1 rounded border border-white/5 flex justify-between items-center">
						<span class="text-zinc-500 font-bold">#${idx + 1}</span>
						<span class="text-white font-bold">${s.weight} kg × ${s.reps}</span>
						<span>${s.delta ? `<span class="${s.delta.startsWith('+') ? 'text-[#BFFF00]' : (s.delta.startsWith('-') ? 'text-red-400' : 'text-zinc-500')} font-extrabold font-mono">${s.delta}</span>` : '<span class="text-zinc-600 font-mono">0kg</span>'}</span>
					</div>`;
				}).join("");

				row.innerHTML = `
					<div class="flex items-center gap-2">
						<span class="text-[8px] font-bold text-[#BFFF00] uppercase tracking-wider bg-[#BFFF00]/5 px-1.5 py-0.5 rounded border border-[#BFFF00]/10">${ex.category}</span>
						<span class="text-xs font-bold text-white">${ex.name}</span>
					</div>
					<div class="grid grid-cols-1 sm:grid-cols-2 gap-1.5 pb-1">
						${setsDetails}
					</div>
				`;
				exercisesList.appendChild(row);
			});
		} else {
			exercisesList.innerHTML = `<p class="italic text-[11px] text-zinc-500">Brak serii w tym treningu.</p>`;
		}
	});

	const headers = container.querySelectorAll("[data-accordion-header]");
	headers.forEach(header => {
		header.addEventListener("click", () => {
			const id = header.getAttribute("data-accordion-header");
			const body = container.querySelector(`[data-accordion-body="${id}"]`);
			const icon = container.querySelector(`[data-accordion-icon="${id}"]`);
			
			if (body) {
				const isExpanded = !body.classList.contains("hidden");
				if (isExpanded) {
					body.classList.add("hidden");
					if (icon) icon.classList.remove("rotate-180");
				} else {
					body.classList.remove("hidden");
					if (icon) icon.classList.add("rotate-180");
				}
			}
		});
	});

	const deleteButtons = container.querySelectorAll("[data-delete-workout]");
	deleteButtons.forEach(btn => {
		btn.addEventListener("click", (e) => {
			e.stopPropagation();
			const id = btn.getAttribute("data-delete-workout");
			const confirmed = confirm("Czy na pewno chcesz usunąć ten trening z historii? Operacja jest nieodwracalna.");
			if (confirmed) {
				history = history.filter(w => w.id !== id);
				localStorage.setItem(STORAGE_HISTORY_KEY, JSON.stringify(history));
				localStorage.setItem("workout_history", JSON.stringify(history));
				
				renderReportsTab();
				updateLastWorkoutBanner();
			}
		});
	});
}

const polishMonths = [
	"Styczeń", "Luty", "Marzec", "Kwiecień", "Maj", "Czerwiec",
	"Lipiec", "Sierpień", "Wrzesień", "Październik", "Listopad", "Grudzień"
];

function renderCalendar() {
	const titleElement = document.getElementById("calendar-title");
	const gridElement = document.getElementById("calendar-days-grid");
	if (!titleElement || !gridElement) return;

	titleElement.textContent = `${polishMonths[calendarMonth]} ${calendarYear}`;
	gridElement.innerHTML = "";

	let firstDayIndex = new Date(calendarYear, calendarMonth, 1).getDay();
	firstDayIndex = firstDayIndex === 0 ? 6 : firstDayIndex - 1;

	const daysCount = new Date(calendarYear, calendarMonth + 1, 0).getDate();

	for (let i = 0; i < firstDayIndex; i++) {
		const blank = document.createElement("div");
		blank.className = "text-zinc-700 py-2.5";
		gridElement.appendChild(blank);
	}

	for (let day = 1; day <= daysCount; day++) {
		const button = document.createElement("button");
		button.className = "py-2 relative flex flex-col items-center justify-center rounded-lg hover:bg-zinc-800 transition-all font-mono";
		button.textContent = day;

		const currentMonthStr = calendarMonth < 9 ? "0" + (calendarMonth + 1) : "" + (calendarMonth + 1);
		const currentDayStr = day < 10 ? "0" + day : "" + day;
		const fullDateStr = `${calendarYear}-${currentMonthStr}-${currentDayStr}`;

		const hasWorkout = history.some(item => item.date === fullDateStr);
		if (hasWorkout) {
			button.classList.add("calendar-cell-workout");
		}

		if (fullDateStr === selectedCalendarDate) {
			button.classList.add("border", "border-[#BFFF00]", "bg-white/5");
		}

		button.addEventListener("click", () => {
			selectedCalendarDate = fullDateStr;
			renderCalendar();
			renderSelectedDayWorkouts();
		});

		gridElement.appendChild(button);
	}
}

function calculateStats() {
	document.getElementById("stats-total-count").textContent = history.length;
	
	let totalVolume = 0;
	let maxWeight = 0;
	
	history.forEach(workout => {
		workout.exercises.forEach(ex => {
			ex.sets.forEach(set => {
				totalVolume += set.weight * set.reps;
				if (set.weight > maxWeight) {
					maxWeight = set.weight;
				}
			});
		});
	});
	
	document.getElementById("stats-total-volume").textContent = `${totalVolume} kg`;
	document.getElementById("stats-max-weight").textContent = `${maxWeight} kg`;
}

function renderSelectedDayWorkouts() {
	const labelDate = document.getElementById("reports-selected-date");
	const container = document.getElementById("selected-day-workouts");
	if (!labelDate || !container) return;

	const beautyDate = selectedCalendarDate.split("-").reverse().join(".");
	labelDate.textContent = beautyDate;
	container.innerHTML = "";

	const dayWorkouts = history.filter(item => item.date === selectedCalendarDate);
	if (dayWorkouts.length === 0) {
		container.innerHTML = `<p class="italic text-center py-4 text-zinc-500">Brak treningów w tym dniu.</p>`;
		return;
	}

	dayWorkouts.forEach(workout => {
		const card = document.createElement("div");
		card.className = "border border-white/5 bg-[#1A1D23]/60 rounded-lg p-3 space-y-2";
		
		card.innerHTML = `
			<div class="flex items-center justify-between border-b border-white/5 pb-1.5">
				<h5 class="font-bold text-white uppercase text-[11px]">${workout.name}</h5>
				<span class="text-[#9BA3AF] text-[10px] font-medium font-mono">${workout.duration} min</span>
			</div>
			<div id="exercises-log-${workout.id}" class="space-y-1.5 pt-1"></div>
		`;
		
		container.appendChild(card);
		
		const subList = document.getElementById(`exercises-log-${workout.id}`);
		workout.exercises.forEach(ex => {
			const row = document.createElement("div");
			row.className = "text-zinc-300";
			
			const detailStr = ex.sets.map(s => {
				let sStr = `${s.weight}kg × ${s.reps}`;
				if (s.delta) {
					const col = s.delta.startsWith("+") ? "text-[#BFFF00]" : (s.delta.startsWith("-") ? "text-red-400" : "text-zinc-500");
					sStr += ` <span class="${col} text-[9px] font-bold">(${s.delta})</span>`;
				}
				return sStr;
			}).join(", ");
			row.innerHTML = `
				<div class="flex items-start justify-between text-[11px]">
					<span class="font-bold">- ${ex.name}</span>
					<span class="font-mono text-zinc-400 text-right max-w-[70%]">${detailStr || 'brak serii'}</span>
				</div>
			`;
			subList.appendChild(row);
		});
	});
}

function setupAtlas() {
	const inputSearch = document.getElementById("exercise-search");
	if (inputSearch) {
		inputSearch.addEventListener("keyup", (e) => {
			searchFilterQuery = e.target.value.trim().toLowerCase();
			renderAtlasList();
		});
	}

	const pillContainer = document.getElementById("muscle-category-pills");
	if (pillContainer) {
		const buttons = pillContainer.querySelectorAll("button");
		buttons.forEach(btn => {
			btn.addEventListener("click", () => {
				buttons.forEach(b => {
					b.className = "px-3.5 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-wider whitespace-nowrap bg-white/5 text-[#9BA3AF] border border-white/5 hover:border-white/10 transition-all";
				});
				btn.className = "px-3.5 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-wider whitespace-nowrap bg-[#BFFF00] text-black border border-[#BFFF00] transition-all";
				activeCategoryFilter = btn.getAttribute("data-category");
				renderAtlasList();
			});
		});
	}

	const btnSave = document.getElementById("btn-save-custom-exercise");
	if (btnSave) {
		btnSave.addEventListener("click", () => {
			const inputName = document.getElementById("new-exercise-name");
			const selectCat = document.getElementById("new-exercise-category");
			const name = inputName.value.trim();
			const category = selectCat.value;
			
			if (name.length < 2) return;
			
			const alreadyExists = exercises.some(ex => ex.name.toLowerCase() === name.toLowerCase());
			if (alreadyExists) return;

			const newEx = {
				id: "custom_" + Date.now(),
				name: name,
				category: category
			};
			
			exercises.push(newEx);
			localStorage.setItem(STORAGE_EXERCISES_KEY, JSON.stringify(exercises));
			
			inputName.value = "";
			renderAtlasList();
		});
	}
}

function renderAtlasTab() {
	renderAtlasList();
}

function renderAtlasList() {
	const container = document.getElementById("exercise-catalog-list");
	if (!container) return;
	
	container.innerHTML = "";
	const filtered = exercises.filter(e => {
		const matchesCategory = activeCategoryFilter === "Wszystkie" || e.category === activeCategoryFilter;
		const matchesSearch = e.name.toLowerCase().includes(searchFilterQuery);
		return matchesCategory && matchesSearch;
	});

	if (filtered.length === 0) {
		container.innerHTML = `<p class="italic text-center py-4 text-zinc-500 text-xs">Brak ćwiczeń spełniających kryteria.</p>`;
		return;
	}

	filtered.forEach(ex => {
		const card = document.createElement("div");
		card.className = "bg-[#1A1D23]/60 border border-white/5 rounded-xl transition-all hover:border-white/10 overflow-hidden";
		
		let maxExWeight = 0;
		history.forEach(workout => {
			workout.exercises.forEach(inst => {
				if (inst.exerciseId === ex.id) {
					inst.sets.forEach(s => {
						if (s.weight > maxExWeight) {
							maxExWeight = s.weight;
						}
					});
				}
			});
		});
		
		const prText = maxExWeight > 0 ? `${maxExWeight} kg` : "brak";
		const isCustom = ex.id.startsWith("custom_");
		
		card.innerHTML = `
			<button class="w-full text-left p-4 flex items-center justify-between gap-4 hover:bg-white/5 active:bg-white/10 transition-all select-none" data-atlas-header="${ex.id}">
				<div class="space-y-1 flex-1">
					<div class="flex items-center gap-2 flex-wrap">
						<span class="text-[9px] font-bold text-[#BFFF00] uppercase tracking-wider bg-[#BFFF00]/5 px-2 py-0.5 rounded border border-[#BFFF00]/20">${ex.category}</span>
						<h5 class="text-xs font-bold text-white">${ex.name}</h5>
					</div>
					<div class="flex items-center gap-1.5 text-[10px] text-zinc-500 font-medium">
						<span>PR: <span class="font-mono text-[#BFFF00] font-bold">${prText}</span></span>
					</div>
				</div>
				<div class="text-[#9BA3AF] transition-transform duration-200" data-atlas-icon="${ex.id}">
					<svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
						<polyline points="6 9 12 15 18 9" />
					</svg>
				</div>
			</button>
			<div class="hidden border-t border-white/5 p-4 bg-[#0F1115]/40 space-y-3" data-atlas-body="${ex.id}">
				<p class="text-[11px] text-[#9BA3AF] leading-relaxed font-normal">${ex.description || "Dla tego ćwiczenia nie został jeszcze dodany opis techniczny."}</p>
				${isCustom ? `
				<div class="flex justify-end pt-1">
					<button class="bg-red-500/10 hover:bg-red-500/20 text-red-400 font-bold text-[9px] uppercase tracking-wider px-2.5 py-1.5 rounded transition-all flex items-center gap-1" data-delete-atlas-custom="${ex.id}">
						<svg class="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
							<polyline points="3 6 5 6 21 6" />
							<path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
						</svg>
						Usuń ćwiczenie
					</button>
				</div>
				` : ""}
			</div>
		`;
		
		const header = card.querySelector(`[data-atlas-header="${ex.id}"]`);
		header.addEventListener("click", () => {
			const body = card.querySelector(`[data-atlas-body="${ex.id}"]`);
			const icon = card.querySelector(`[data-atlas-icon="${ex.id}"]`);
			if (body) {
				const isExpanded = !body.classList.contains("hidden");
				if (isExpanded) {
					body.classList.add("hidden");
					if (icon) icon.classList.remove("rotate-180");
				} else {
					body.classList.remove("hidden");
					if (icon) icon.classList.add("rotate-180");
				}
			}
		});

		if (isCustom) {
			const deleteBtn = card.querySelector(`[data-delete-atlas-custom="${ex.id}"]`);
			if (deleteBtn) {
				deleteBtn.addEventListener("click", (e) => {
					e.stopPropagation();
					const confirmed = confirm(`Czy na pewno chcesz usunąć ćwiczenie "${ex.name}" z atlasu?`);
					if (confirmed) {
						exercises = exercises.filter(e => e.id !== ex.id);
						localStorage.setItem(STORAGE_EXERCISES_KEY, JSON.stringify(exercises));
						renderAtlasList();
					}
				});
			}
		}

		container.appendChild(card);
	});
}

function setupSettings() {
	const btnCopy = document.getElementById("btn-settings-copy");
	if (btnCopy) {
		btnCopy.addEventListener("click", () => {
			const textarea = document.getElementById("export-json-textarea");
			textarea.select();
			navigator.clipboard.writeText(textarea.value);
			btnCopy.textContent = "Skopiowano!";
			setTimeout(() => {
				btnCopy.textContent = "Skopiuj do schowka";
			}, 2000);
		});
	}

	const fileInput = document.getElementById("import-json-file");
	const textarea = document.getElementById("import-json-textarea");
	const statusMsg = document.getElementById("import-status-msg");
	const btnImport = document.getElementById("btn-settings-import");

	function displayStatus(msg, isError = false) {
		if (!statusMsg) return;
		statusMsg.textContent = msg;
		statusMsg.className = isError 
			? "text-xs font-bold py-2.5 px-3 rounded-lg text-center leading-normal block bg-red-950/80 border border-red-800/60 text-red-400 mt-2"
			: "text-xs font-bold py-2.5 px-3 rounded-lg text-center leading-normal block bg-[#BFFF00]/10 border border-[#BFFF00]/20 text-[#BFFF00] mt-2";
	}

	if (btnImport) {
		btnImport.addEventListener("click", () => {
			if (!statusMsg) return;
			statusMsg.classList.add("hidden");

			const file = fileInput && fileInput.files ? fileInput.files[0] : null;

			if (file) {
				const reader = new FileReader();
				reader.onload = (e) => {
					processJSONString(e.target.result);
				};
				reader.onerror = () => {
					displayStatus("Wystąpił błąd podczas odczytu pliku JSON.", true);
				};
				reader.readAsText(file);
			} else {
				const raw = textarea ? textarea.value.trim() : "";
				if (!raw) {
					displayStatus("Wybierz plik .json lub wklej treść JSON do pola tekstowego.", true);
					return;
				}
				processJSONString(raw);
			}
		});
	}

	function processJSONString(jsonStr) {
		try {
			const parsed = JSON.parse(jsonStr);
			validateImportJSON(parsed);

			let feedback = [];
			if (parsed.plans) {
				workoutPlans = parsed.plans;
				localStorage.setItem(STORAGE_PLANS_KEY, JSON.stringify(workoutPlans));
				feedback.push("plany treningowe");
			}
			if (parsed.exercises) {
				exercises = parsed.exercises;
				localStorage.setItem(STORAGE_EXERCISES_KEY, JSON.stringify(exercises));
				feedback.push("bazę ćwiczeń");
			}
			if (parsed.history) {
				history = parsed.history;
				localStorage.setItem(STORAGE_HISTORY_KEY, JSON.stringify(history));
				feedback.push("historię treningów");
			}

			displayStatus(`Sukces! Pomyślnie zaimportowano: ${feedback.join(", ")}.`);
			
			if (fileInput) fileInput.value = "";
			if (textarea) textarea.value = "";

			renderActivePane();
			updateLastWorkoutBanner();
			calculateStats();
		} catch (err) {
			displayStatus(`Błąd importu: ${err.message}`, true);
		}
	}

	function validateImportJSON(data) {
		if (!data || typeof data !== "object" || Array.isArray(data)) {
			throw new Error("Dane wejściowe nie są poprawnym obiektem JSON.");
		}
		if (!data.plans && !data.exercises && !data.history) {
			throw new Error("JSON musi zawierać co najmniej jeden z kluczy: 'plans', 'exercises', 'history'.");
		}
		if (data.plans) {
			if (!Array.isArray(data.plans)) {
				throw new Error("Klucz 'plans' musi być tablicą.");
			}
			data.plans.forEach((plan, i) => {
				if (!plan.name || typeof plan.name !== "string") {
					throw new Error(`Plan #${i + 1} nie posiada właściwości 'name' (nazwa planu).`);
				}
				if (!plan.exercises || !Array.isArray(plan.exercises)) {
					throw new Error(`Plan '${plan.name}' musi zawierać tablicę 'exercises'.`);
				}
				plan.exercises.forEach((ex, j) => {
					if (!ex.name || typeof ex.name !== "string") {
						throw new Error(`Ćwiczenie #${j + 1} w planie '${plan.name}' musi posiadać nazwę.`);
					}
					if (!ex.category || typeof ex.category !== "string") {
						throw new Error(`Ćwiczenie '${ex.name}' w planie '${plan.name}' musi posiadać kategorię.`);
					}
				});
			});
		}
		if (data.exercises) {
			if (!Array.isArray(data.exercises)) {
				throw new Error("Klucz 'exercises' musi być tablicą.");
			}
			data.exercises.forEach((ex, i) => {
				if (!ex.id || typeof ex.id !== "string") {
					throw new Error(`Ćwiczenie #${i + 1} w bazie musi posiadać tekstowe 'id'.`);
				}
				if (!ex.name || typeof ex.name !== "string") {
					throw new Error(`Ćwiczenie #${i + 1} w bazie musi posiadać tekstową nazwę 'name'.`);
				}
				if (!ex.category || typeof ex.category !== "string") {
					throw new Error(`Ćwiczenie '${ex.name || i + 1}' musi posiadać 'category'.`);
				}
			});
		}
		if (data.history) {
			if (!Array.isArray(data.history)) {
				throw new Error("Klucz 'history' musi być tablicą.");
			}
		}
	}

	const btnClear = document.getElementById("btn-settings-clear");
	if (btnClear) {
		btnClear.addEventListener("click", () => {
			localStorage.removeItem(STORAGE_HISTORY_KEY);
			localStorage.removeItem(STORAGE_EXERCISES_KEY);
			localStorage.removeItem(STORAGE_ACTIVE_KEY);
			localStorage.removeItem(STORAGE_PLANS_KEY);
			
			history = [];
			exercises = [...defaultExercises];
			workoutPlans = [...defaultWorkoutPlans];
			activeWorkout = null;
			
			localStorage.setItem(STORAGE_EXERCISES_KEY, JSON.stringify(exercises));
			localStorage.setItem(STORAGE_PLANS_KEY, JSON.stringify(workoutPlans));
			
			stopTimer();
			showIdleLayout();
			updateBadgeStatus();
			updateLastWorkoutBanner();
			
			if (statusMsg) statusMsg.classList.add("hidden");
			
			switchTab("trening");
		});
	}
}

function renderSettingsTab() {
	const summary = document.getElementById("profile-stats-summary");
	if (summary) {
		summary.textContent = `Zalogowane treningi: ${history.length} sesji | Atlas: ${exercises.length} ćw.`;
	}

	const textarea = document.getElementById("export-json-textarea");
	if (textarea) {
		textarea.value = JSON.stringify({ history, exercises, plans: workoutPlans }, null, "\t");
	}
}

document.addEventListener("DOMContentLoaded", init);
