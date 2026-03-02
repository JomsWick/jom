const capitalizeName = (str) => {
    if (!str) return '';
    return str
        .split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
        .join(' ');
};

const allCaps = (str) => {
    return str ? str.toUpperCase() : '';
};

const fullName = (firstName, middleName, lastName) => {
    let name = capitalizeName(firstName);
    if (middleName) name += ' ' + capitalizeName(middleName);
    if (lastName) name += ' ' + capitalizeName(lastName);
    return name;
};

const fullNameWithInitial = (firstName, middleName, lastName) => {
    let name = capitalizeName(firstName);
    if (middleName) name += ' ' + middleName.charAt(0).toUpperCase() + '.';
    if (lastName) name += ' ' + capitalizeName(lastName);
    return name;
};

const formatNumber = (num) => {
    if (num == null) return '';
    return num.toLocaleString();
};

const formatDateShort = (date) => {
    if (!date) return '';
    const d = new Date(date);
    return d.toLocaleDateString(undefined, { year: 'numeric', month: '2-digit', day: '2-digit' });
};

const formatDateLong = (date) => {
    if (!date) return '';
    const d = new Date(date);
    return d.toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' });
};

const formatTime = (date) => {
    if (!date) return '';
    const d = new Date(date);
    return d.toLocaleTimeString(undefined, { hour: 'numeric', minute: '2-digit', hour12: true });
};

const calculateAge = (birthdate) => {
    if (!birthdate) return null;
    const today = new Date();
    const birth = new Date(birthdate);
    let age = today.getFullYear() - birth.getFullYear();
    const m = today.getMonth() - birth.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birth.getDate())) {
        age--;
    }
    return age;
};

const completeAddress = (address, shortFormat = false) => {
    if (!address || typeof address !== 'object') return '';

    const smallWords = ['del', 'de', 'la', 'of', 'and', 'the', 'a', 'an', 'da'];
    const romanRegex = /^(?=[MDCLXVI])M{0,4}(CM|CD|D?C{0,3})(XC|XL|L?X{0,3})(IX|IV|V?I{0,3})$/i;

    const capitalizeWord = (word, index) => {
        if (!word) return '';
        if (romanRegex.test(word)) return word.toUpperCase();
        if (smallWords.includes(word.toLowerCase()) && index !== 0) return word.toLowerCase();
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    };

    const parts = shortFormat
        ? [
              address.street,
              address.barangay,
              address.municipality,
              address.province,
              address.zipcode,
              address.country,
              address.region
          ]
        : [
              address.unit ? `Unit ${address.unit}` : '',
              address.floor ? `Floor ${address.floor}` : '',
              address.block ? `Block ${address.block}` : '',
              address.lot ? `Lot ${address.lot}` : '',
              address.phase ? `Phase ${address.phase}` : '',
              address.subdivision ? address.subdivision : '',
              address.street,
              address.barangay,
              address.municipality,
              address.province,
              address.region,
              address.country,
              address.zipcode
          ];

    return parts
        .filter(part => part && part.trim() !== '')
        .map((part, index) =>
            part
                .split(' ')
                .map((w, i) => capitalizeWord(w, i))
                .join(' ')
        )
        .join(', ');
};

const capitalizePreposition = (str) => {
    if (!str) return '';
    const smallWords = ['del', 'de', 'la', 'of', 'and', 'the', 'a', 'an', 'da'];

    const romanRegex = /^(?=[MDCLXVI])M{0,4}(CM|CD|D?C{0,3})(XC|XL|L?X{0,3})(IX|IV|V?I{0,3})$/i;

    return str
        .split(' ')
        .map((word, index) => {
            if (romanRegex.test(word)) {
                return word.toUpperCase();
            } else if (smallWords.includes(word.toLowerCase()) && index !== 0) {
                return word.toLowerCase();
            } else {
                return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
            }
        })
        .join(' ');
};

export {
    capitalizeName,
    allCaps,
    fullName,
    fullNameWithInitial,
    formatNumber,
    formatDateShort,
    formatDateLong,
    formatTime,
    calculateAge,
    completeAddress,
    capitalizePreposition,
};