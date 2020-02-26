const batteries = [
  {capacity_mah: 1300, brand: "Goldbat", cells: 4, connector: "xt60"},
  {capacity_mah: 1300, brand: "Goldbat", cells: 4, connector: "xt60"},
  {capacity_mah: 1500, brand: "Hoobo", cells: 4, connector: "xt60"},
  {capacity_mah: 1500, brand: "Hoobo", cells: 4, connector: "xt60"},
  {capacity_mah: 1500, brand: "Floureon", cells: 3, connector: "xt60"},
  {capacity_mah: 1500, brand: "Floureon", cells: 3, connector: "xt60"},
  {capacity_mah: 2000, brand: "Talon", cells: 4, connector: "xt60"},
  {capacity_mah: 2000, brand: "Talon", cells: 4, connector: "xt60"},
  {capacity_mah: 850, brand: "GNB", cells: 4, connector: "xt30"},
  {capacity_mah: 850, brand: "GNB", cells: 4, connector: "xt30"},
  {capacity_mah: 650, brand: "Talon", cells: 4, connector: "xt30", label="1"},
  {capacity_mah: 650, brand: "Talon", cells: 4, connector: "xt30", label="2"},
  {capacity_mah: 650, brand: "Talon", cells: 4, connector: "xt30", label="3"},
  {capacity_mah: 650, brand: "Talon", cells: 4, connector: "xt30", label="4"},
  {capacity_mah: 650, brand: "Talon", cells: 4, connector: "xt30", label="5"},
  {capacity_mah: 650, brand: "Talon", cells: 4, connector: "xt30", label="6"},
  {capacity_mah: 650, brand: "Talon", cells: 4, connector: "xt30", label="7"},
  {capacity_mah: 650, brand: "Talon", cells: 4, connector: "xt30", label="8"},
  {capacity_mah: 650, brand: "Talon", cells: 4, connector: "xt30", label="9"},
  {capacity_mah: 650, brand: "Talon", cells: 4, connector: "xt30", label="10"},
  {capacity_mah: 650, brand: "Talon", cells: 4, connector: "xt30", label="11"},
  {capacity_mah: 650, brand: "Talon", cells: 4, connector: "xt30", label="12"},
  {capacity_mah: 300, brand: "Lumenieer", cells: 3, connector: "xt30", label="1"},
  {capacity_mah: 300, brand: "Lumenieer", cells: 3, connector: "xt30", label="2"},
  {capacity_mah: 300, brand: "Lumenieer", cells: 3, connector: "xt30", label="3"},
  {capacity_mah: 300, brand: "Lumenieer", cells: 3, connector: "xt30", label="4"},
  {capacity_mah: 300, brand: "Lumenieer", cells: 3, connector: "xt30", label="5"},
  {capacity_mah: 300, brand: "Lumenieer", cells: 3, connector: "xt30", label="6"},
  {capacity_mah: 300, brand: "Lumenieer", cells: 3, connector: "xt30", label="7"},
  {capacity_mah: 300, brand: "Lumenieer", cells: 3, connector: "xt30", label="8"},
  {capacity_mah: 300, brand: "Lumenieer", cells: 3, connector: "xt30", label="9"},
  {capacity_mah: 300, brand: "Lumenieer", cells: 3, connector: "xt30", label="10"},
  {capacity_mah: 300, brand: "Lumenieer", cells: 3, connector: "xt30", label="11"},
  {capacity_mah: 300, brand: "Lumenieer", cells: 3, connector: "xt30", label="12"},
  {capacity_mah: 450, brand: "BetaFPV", cells: 3, connector: "xt30"},
  {capacity_mah: 450, brand: "BetaFPV", cells: 3, connector: "xt30"},
  {capacity_mah: 450, brand: "BetaFPV", cells: 3, connector: "xt30"},
  {capacity_mah: 450, brand: "BetaFPV", cells: 3, connector: "xt30"},
  {capacity_mah: 450, brand: "BetaFPV", cells: 3, connector: "xt30"},
  {capacity_mah: 450, brand: "BetaFPV", cells: 3, connector: "xt30"},
];

const flights = [];

const aircraft = [
  {
    name: "Kakute",
    flight_controller: "Kakute F7 Mini",
    motors: "Xing Purples",
    kv: 4200,
    magnet_count: 4,
    vtx: "Atlatl Mini",
    betaflight_version: "4.1",
    rpm_filter: true,
    gps: true,
    frame: "Acrobrat Duo",
    camera: "Caddx Tarsier v2",
    category: "3inch"
  },
  {
    name: "GepRC 4k",
    category: "3inch"
  },
  {
    name: "CineBee HD",
    category: "whoop"
  },
  {
    name: "Joey 1",
    category: "5inch"
  },
];