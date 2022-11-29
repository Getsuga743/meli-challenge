export const formatPrice = (price, locale, options) => {
    return new Intl.NumberFormat(locale, options).format(price);
};

export const formatDate = (date, locale, options) => {
    return new Intl.DateTimeFormat(locale, options).format(date);
};
