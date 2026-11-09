// Vérifie par le calcul tous les chiffres utilisés dans les exemples et le quiz.
// Lancer : npm run check
let erreurs = 0;
const ok = (nom, obtenu, attendu, tol = 1e-9) => {
  const bon = Math.abs(obtenu - attendu) <= tol;
  if (!bon) erreurs++;
  console.log(`${bon ? 'OK ' : 'ERR'} ${nom}: ${obtenu}${bon ? '' : ` (attendu ${attendu})`}`);
};

// ---- Chapitre I : marché concurrentiel ----
// Demande : P = 10 - 0,5 Q  (Qd = 20 - 2P) ; Offre : P = 2 + 0,5 Q  (Qo = 2P - 4)
const Qd = (P) => 20 - 2 * P, Qo = (P) => 2 * P - 4;
const Pe = 24 / 4; // 20 - 2P = 2P - 4
ok('ch1 prix d’équilibre', Pe, 6);
ok('ch1 Qd(P*) = Qo(P*)', Qd(Pe) - Qo(Pe), 0);
ok('ch1 quantité d’équilibre', Qd(Pe), 8);
ok('ch1 excès d’offre à P=8', Qo(8) - Qd(8), 8);
ok('ch1 Qd(8)', Qd(8), 4); ok('ch1 Qo(8)', Qo(8), 12);
ok('ch1 excès de demande à P=4', Qd(4) - Qo(4), 8);
const SC = (10 - Pe) * Qd(Pe) / 2, SP = (Pe - 2) * Qd(Pe) / 2;
ok('ch1 surplus consommateur', SC, 16); ok('ch1 surplus producteur', SP, 16); ok('ch1 surplus total', SC + SP, 32);
// Taxe forfaitaire unitaire t = 2 sur les producteurs : offre P = 4 + 0,5Q
const t = 2; const Qt = (10 - 2 - t) / 1; // 10 - 0,5Q = 2 + t + 0,5Q
ok('ch1 quantité après taxe', Qt, 6);
const Pc = 10 - 0.5 * Qt, Pp = Pc - t;
ok('ch1 prix payé consommateur', Pc, 7); ok('ch1 prix reçu producteur', Pp, 5);
ok('ch1 recettes fiscales', t * Qt, 12);
const SCt = (10 - Pc) * Qt / 2, SPt = (Pp - 2) * Qt / 2;
ok('ch1 SC après taxe', SCt, 9); ok('ch1 SP après taxe', SPt, 9);
ok('ch1 perte sèche', (SC + SP) - (SCt + SPt + t * Qt), 2);
ok('ch1 perte sèche (triangle)', t * (Qd(Pe) - Qt) / 2, 2);
// Subvention s = 2 : offre P = 0 + 0,5Q
const Qs = (10 - 2 + 2) / 1; ok('ch1 quantité avec subvention', Qs, 10);
ok('ch1 prix payé avec subvention', 10 - 0.5 * Qs, 5);
ok('ch1 coût de la subvention', 2 * Qs, 20);
// Coût marginal : unités 1..6
const cm = [3, 4, 5, 6, 8, 10];
const qOpt = (p) => cm.filter((c) => c <= p).length;
ok('ch1 quantité optimale à P=7', qOpt(7), 4);
const profit = (p, q) => p * q - cm.slice(0, q).reduce((a, b) => a + b, 0) - 5; // coût fixe 5
const meilleurQ = [0,1,2,3,4,5,6].reduce((b, q) => (profit(7, q) > profit(7, b) ? q : b), 0);
ok('ch1 profit max atteint en Q=4', meilleurQ, 4);
ok('ch1 profit à Q=4, P=7', profit(7, 4), 5); ok('ch1 profit à Q=3, P=7', profit(7, 3), 4); ok('ch1 profit à Q=5, P=7', profit(7, 5), 4);
ok('ch1 quantité optimale à P=9', qOpt(9), 5);
ok('ch1 profit unique max à P=9 en Q=5', [0,1,2,3,4,5,6].reduce((b, q) => (profit(9, q) > profit(9, b) ? q : b), 0), 5);
ok('ch1 profit(9,5) > profit(9,4)', profit(9, 5) - profit(9, 4), 1);
ok('ch1 tableau profits Q1..6 à P=7', JSON.stringify([1,2,3,4,5,6].map((q) => profit(7, q))) === '[-1,2,4,5,4,1]' ? 1 : 0, 1);
const CT = (q) => 5 + cm.slice(0, q).reduce((a, b) => a + b, 0);
ok('ch1 CT(4)', CT(4), 23); ok('ch1 CT(5)', CT(5), 31); ok('ch1 Cm 5e caisse', CT(5) - CT(4), 8);
// Déplacement de la demande : D2 : P = 12 - 0,5Q
const Q2 = (12 - 2) / 1; ok('ch1 Q après hausse demande', Q2, 10); ok('ch1 P après hausse demande', 12 - 0.5 * Q2, 7); ok('ch1 offre en Q=10', 2 + 0.5 * 10, 7);

// ---- Chapitre II : monopole (D : P = 10 - 0,5Q ; Rm = 10 - Q ; Cm = 2) ----
{
  const Qm = (10 - 2) / 1; ok('ch2 quantité monopole (Rm = Cm)', Qm, 8);
  const Pm = 10 - 0.5 * Qm; ok('ch2 prix monopole', Pm, 6);
  ok('ch2 Rm = dérivée de RT en Q=8', (Pm * Qm - (10 - 0.5 * (Qm - 0.001)) * (Qm - 0.001)) / 0.001, 2, 0.01);
  const Qc = (10 - 2) / 0.5; ok('ch2 quantité concurrence (P = Cm)', Qc, 16);
  ok('ch2 profit monopole', (Pm - 2) * Qm, 32);
  ok('ch2 SC monopole', (10 - Pm) * Qm / 2, 16);
  ok('ch2 SC concurrence', (10 - 2) * Qc / 2, 64);
  ok('ch2 perte sèche monopole', (Pm - 2) * (Qc - Qm) / 2, 16);
  ok('ch2 surplus total monopole + perte = concurrence', (10 - Pm) * Qm / 2 + (Pm - 2) * Qm + (Pm - 2) * (Qc - Qm) / 2, 64);
  // Dilemme du prisonnier : gains [A][B], stratégie 0 = prix élevé, 1 = prix bas
  const g = { '00': [10, 10], '01': [3, 14], '10': [14, 3], '11': [5, 5] };
  const meilleureA = (b) => (g[`1${b}`][0] > g[`0${b}`][0] ? 1 : 0);
  ok('ch2 prix bas dominant si B prix élevé', meilleureA(0), 1);
  ok('ch2 prix bas dominant si B prix bas', meilleureA(1), 1);
  ok('ch2 équilibre (bas, bas) gain A', g['11'][0], 5);
  ok('ch2 entente meilleure pour les deux', g['00'][0] > g['11'][0] ? 1 : 0, 1);
}

// ---- Chapitre III : externalité négative (coût externe 2 par unité) ----
{
  const Qmarche = (10 - 2) / 1; ok('ch3 quantité de marché', Qmarche, 8);
  const Qopt = (10 - 4) / 1; ok('ch3 quantité optimale', Qopt, 6);
  ok('ch3 prix optimal', 10 - 0.5 * Qopt, 7);
  ok('ch3 coût externe total au marché', 2 * Qmarche, 16);
  ok('ch3 perte de bien-être', 2 * (Qmarche - Qopt) / 2, 2);
  // Akerlof : bonne voiture valeur acheteur 10000, vendeur 8000 ; mauvaise 4000 ; 50 / 50
  const esperance = 0.5 * 10000 + 0.5 * 4000; ok('ch3 prix moyen proposé', esperance, 7000);
  ok('ch3 bonnes voitures retirées (7000 < 8000)', esperance < 8000 ? 1 : 0, 1);
}

// ---- Chapitre IV : financement ----
{
  const Rd = 2500, C = 2200; ok('ch4 épargne', Rd - C, 300); ok('ch4 taux d’épargne %', (Rd - C) / Rd * 100, 12);
  // fonds prêtables : offre i = 1 + 0,1Q ; demande i = 7 - 0,1Q ; demande accrue i = 9 - 0,1Q
  const Q1 = (7 - 1) / 0.2; ok('ch4 fonds échangés', Q1, 30); ok('ch4 taux d’équilibre', 1 + 0.1 * Q1, 4);
  const Q2 = (9 - 1) / 0.2; ok('ch4 fonds après emprunt public', Q2, 40); ok('ch4 nouveau taux', 1 + 0.1 * Q2, 5);
  const prive = (7 - 5) / 0.1; ok('ch4 investissement privé évincé (Q privé à 5 %)', prive, 20);
  ok('ch4 emprunt public', Q2 - prive, 20);
  ok('ch4 taux réel exact %', Math.round((1.04 / 1.015 - 1) * 10000) / 100, 2.46);
  ok('ch4 taux réel approché %', 4 - 1.5, 2.5);
  ok('ch4 EBE', 500 - 300 - 20, 180);
  ok('ch4 taux d’autofinancement %', 150 / 250 * 100, 60);
  ok('ch4 solde budgétaire', 320 - 370, -50);
  ok('ch4 coupon obligation', 1000 * 0.03, 30);
  ok('ch4 intérêts emprunt 1 an', 20000 * 0.045, 900);
}

// ---- Chapitre II (suite) : recette marginale discrète ----
ok('ch2 RT(8)', 8 * (10 - 0.5 * 8), 48); ok('ch2 RT(9)', 9 * (10 - 0.5 * 9), 49.5); ok('ch2 Rm 9e unité', 9 * (10 - 0.5 * 9) - 8 * (10 - 0.5 * 8), 1.5);
// ---- Chapitre V : monnaie ----
ok('ch5 rapports d’échange en troc pour 100 biens', 100 * 99 / 2, 4950);
ok('ch5 variation nette de la masse monétaire', 10000 - 2000, 8000);

// ---- Chapitre IX : marge d’erreur (sondage aléatoire, 95 %) ----
const marge = (n, p = 0.5) => Math.round(1.96 * Math.sqrt((p * (1 - p)) / n) * 1000) / 10;
ok('ch9 marge n=1000, p=50 %', marge(1000), 3.1);
ok('ch9 marge n=4000, p=50 %', marge(4000), 1.5);
ok('ch9 marge n=1000, p=20 %', marge(1000, 0.2), 2.5);
// ---- Chapitre X : participation (données fictives) ----
ok('ch10 taux d’inscription %', Math.round(1000 / 1100 * 1000) / 10, 90.9);
ok('ch10 taux de participation %', 720 / 1000 * 100, 72);
ok('ch10 taux d’abstention %', (1000 - 720) / 1000 * 100, 28);
ok('ch10 blancs et nuls % votants', Math.round(30 / 720 * 1000) / 10, 4.2);
ok('ch10 exprimés', 720 - 30, 690);
ok('ch10 abstention rapportée aux personnes en âge de voter %', Math.round((1100 - 720) / 1100 * 1000) / 10, 34.5);
// ---- Chapitre XI : mutualisation ----
ok('ch11 coût total attendu', 1000 * 0.01 * 20000, 200000);
ok('ch11 prime pure', 1000 * 0.01 * 20000 / 1000, 200);
ok('ch11 prime avec chargement 25 %', 200 * 1.25, 250);

// ---- Techniques : chiffres des exemples corrigés et des phrases modèles ----
const r1 = (x) => Math.round(x * 10) / 10;
ok('tech proportions : 45/70', r1((45 / 70) * 100), 64.3);
ok('tech proportions : 45/120', (45 / 120) * 100, 37.5);
ok('tech proportions : 45/200 (part du total)', (45 / 200) * 100, 22.5);
ok('tech proportions : totaux du tableau', 45 + 30 + 45 + 25 + 40 + 15, 200);
ok('tech taux : 400 000 → 460 000', ((460000 - 400000) / 400000) * 100, 15);
ok('tech taux : CM global 1,15 × 0,9', 1.15 * 0.9, 1.035, 1e-12);
ok('tech taux : taux annuel moyen', r1((Math.sqrt(1.035) - 1) * 100), 1.7);
ok('tech taux : ticket 8 → 9,20', ((9.2 - 8) / 8) * 100, 15, 1e-9);
ok('tech indices : 46/40', (46 / 40) * 100, 115);
ok('tech indices : 52/40', (52 / 40) * 100, 130);
ok('tech indices : 115 → 130', r1(((130 - 115) / 115) * 100), 13);
ok('tech moyennes : moyenne salaires', (1200 + 1500 + 1800 + 2100 + 9000) / 5, 3120);
ok('tech points : 7,5 → 9 en %', ((9 - 7.5) / 7.5) * 100, 20);
ok('tech valeur réelle : 2000 → 2060', ((2060 - 2000) / 2000) * 100, 3);
ok('tech valeur réelle : 1,03/1,02', Math.round((1.03 / 1.02 - 1) * 10000) / 100, 0.98);
ok('tech graphiques : élasticité exemple', ((450 - 500) / 500) / ((12 - 10) / 10), -0.5);

// ---- Sujets ----
const r1s = (x) => Math.round(x * 10) / 10;
// Officiel 26-SESJ1ME1 EC2 (données INSEE recopiées du sujet)
ok('sujet 26 ens. écart points', r1s(37 - 47.8), -10.8);
ok('sujet 26 ens. variation %', r1s(((37 - 47.8) / 47.8) * 100), -22.6);
ok('sujet 26 18-29 écart points', r1s(17.3 - 26.8), -9.5);
ok('sujet 26 18-29 variation %', r1s(((17.3 - 26.8) / 26.8) * 100), -35.4);
ok('sujet 26 écart 65+ / 18-29 en 2022', r1s(47.7 - 17.3), 30.4);
// Type marché EC2 : Qd = 140 - 20P ; Qo = 20P - 20
const qd = (p) => 140 - 20 * p, qo = (p) => 20 * p - 20;
ok('sujet fraises : tableau Qd', JSON.stringify([2, 3, 4, 5, 6].map(qd)) === '[100,80,60,40,20]' ? 1 : 0, 1);
ok('sujet fraises : tableau Qo', JSON.stringify([2, 3, 4, 5, 6].map(qo)) === '[20,40,60,80,100]' ? 1 : 0, 1);
ok('sujet fraises : équilibre P', 160 / 40, 4); ok('sujet fraises : équilibre Q', qd(4), 60);
ok('sujet fraises : excès d’offre à 5', qo(5) - qd(5), 40);
const pT = 180 / 40; ok('sujet fraises : prix avec taxe', pT, 4.5);
ok('sujet fraises : quantité avec taxe', qd(pT), 50); ok('sujet fraises : offre taxée', 20 * (pT - 1) - 20, 50);
ok('sujet fraises : recettes (milliers €)', 1 * qd(pT), 50);
// Type financement EC2
ok('sujet autofinancement : écart points', 80 - 95, -15);
ok('sujet autofinancement : variation %', r1s(((80 - 95) / 95) * 100), -15.8);
// Type déviance EC2
ok('sujet plaintes vélos %', (100000 / 400000) * 100, 25);
ok('sujet plaintes violences %', (180000 / 600000) * 100, 30);
ok('sujet plaintes cambriolages %', (210000 / 300000) * 100, 70);
ok('sujet plaintes rapport 70/25', 70 / 25, 2.8);
// Type liens EC3 et risques EC3
ok('sujet liens : rapport 15/6', 15 / 6, 2.5);
ok('sujet risques : prime pure', 0.01 * 20000, 200);
ok('sujet risques : sinistres +%', ((52 - 40) / 40) * 100, 30);

// ---- Méthodologie : copies modèles ----
ok('méthodo EC2 écart 65+ / 18-24 (points)', 84 - 58, 26);
ok('méthodo EC2 rapport 84/58', Math.round((84 / 58) * 100) / 100, 1.45);
ok('méthodo EC2 écart 25-34 → 35-49', 71 - 62, 9);
ok('méthodo EC3 écart HLP / NSI (points)', 75 - 18, 57);

console.log(erreurs ? `\n${erreurs} erreur(s)` : '\nTous les calculs sont vérifiés.');
process.exit(erreurs ? 1 : 0);
