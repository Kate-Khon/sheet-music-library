// #1
export const litanieList = [
  { path: 'ektenia_wielka_kijowska', title: 'Ektenia wielka', author: 'Kijowska', folder: 'kijowska' },
  { path: 'ektenia_wielka_sofijska', title: 'Ektenia wielka', author: 'Sofijska', folder: 'sofijska'  },
  { path: 'ektenia_wielka_archangielski', title: 'Ektenia wielka Archangielski', author: 'Archangielski', folder: 'archangelski' },
  { path: 'ektenia_wielka_moskiewska', title: 'Ektenia wielka', author: 'Moskiewska' },
  { path: 'ektenia_wielka_stecenko-1910', title: 'Ektenia wielka', author: 'Stecenko (z liturgii 1910 roku)', folder: 'stecenko-1910',  uprPath: 'ektenia_wielka_stecenko-1910-uproszcz', uprTitle: 'Uproszczony' },
  { path: 'ektenia_wielka_stecenko-1907', title: 'Ektenia wielka', author: 'Stecenko (z liturgii 1907 roku)', folder: 'stecenko-1907' },
].sort((a, b) => a.author.localeCompare(b.author));

// #2
export const antyfonas1List = [
  { path: 'antyfona_1_arch_mateusz', title: 'Antyfona I', author: 'archimendryt Mateusz', folder: 'archimendryt-mateusz' },
  { path: 'antyfona_1_ippolitow_iwanow', title: 'Antyfona I', author: 'Ippolitow-Iwanow', folder: 'ippolitow-iwanow' },
].sort((a, b) => a.author.localeCompare(b.author));

// #3
export const littleLitanies1List = [
  { path: 'ektenia_mala_1_archangielski', title: 'Ektenia mała I', author: 'Archangelski', folder: 'archangelski' },
  { path: 'ektenia_mala_1_ippolitow-iwanow', title: 'Ektenia mała I', author: 'Ippolitow-Iwanow', folder: 'ippolitow-iwanow' },
  { path: 'ektenia_mala_1_kijowska', title: 'Ektenia mała I', author: 'Kijowska', folder: 'kijowska' },
  { path: 'ektenia_mala_1_moskiewska', title: 'Ektenia mała I', author: 'Moskiewska', folder: 'moskiewska' },
  { path: 'ektenia_mala_1_moskiewska-ippolitow-iwanow', title: 'Ektenia mała I', author: 'Ippolitow-Iwanow (moskiewska)', folder: 'ippolitow-iwanow-moskiewska' },
  { path: 'ektenia_mala_1_stecenko-1910', title: 'Ektenia mała I', author: 'Stecenko (1910)', folder: 'stecenko-1910' },
].sort((a, b) => a.author.localeCompare(b.author));

// #4
export const antyfonas2List = [
  { path: 'antyfona_2_ippolitow_iwanow', title: 'Antyfona II', author: 'Ippolitow-Iwanow', folder: 'ippolitow-iwanow' },
].sort((a, b) => a.author.localeCompare(b.author));

// #7
export const antyfonas3List = [
  { path: 'antyfona_3_ton_4', title: 'Antyfona III', author: 'Ton 4', folder: 'ton-4' },
].sort((a, b) => a.author.localeCompare(b.author));

// #8
export const takeABow = [
  { path: 'przyjdzcie_poklonmy_sie_stecenko', title: 'Przyjdźcie, pokłońmy się', author: 'Stecenko', folder: 'stecenko' },
  { path: 'przyjdzcie_poklonmy_sie_kijowska', title: 'Przyjdźcie, pokłońmy się', author: 'Kijowska', folder: 'kijowska' },
  { path: 'przyjdzcie_poklonmy_sie_kijowska_dzien_powszedni', title: 'Przyjdźcie, pokłońmy się', author: 'Kijowska (dzień powszedni)', folder: 'kijowska-dzien-powszedni' },
  { path: 'przyjdzcie_poklonmy_sie_stecenko_as_dur', title: 'Przyjdźcie, pokłońmy się', author: 'Stecenko (As-dur)', folder: 'stecenko-as-dur' },
].sort((a, b) => a.author.localeCompare(b.author));
