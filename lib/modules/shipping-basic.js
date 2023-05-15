const domesticShippingAmount = 10;
const workShippingAmount = 20;
const internationalShippingAmount = 25;
const freeThreshold = 150;
const freeTwoshold = 100;
const shippingFromCountry = "Australia";

const calculateShipping = (amount, config, req) => {
  // If a subscription, remove shipping
  if (req.session.cartSubscription) {
    req.session.shippingMessage = "FREE shipping";
    req.session.totalCartShipping = 0;
    req.session.totalCartAmount = req.session.totalCartAmount + 0;
    return;
  }

  // Calculate free shipping when amount > 150
  if (amount >= freeThreshold) {
    req.session.shippingMessage = "FREE shipping";
    req.session.totalCartShipping = 0;
    req.session.totalCartAmount = req.session.totalCartAmount + 0;
    return;
  }

  // Calculate: when amount > 100 and < 150 shipping 10
  if (amount > freeTwoshold && amount <= freeThreshold) {
    req.session.shippingMessage = "Normal shipping";
    req.session.totalCartShipping = domesticShippingAmount;
    req.session.totalCartAmount = amount + domesticShippingAmount;
    return;
  }

  // Calculate: when amount < 100 shipping 20
  if (amount <= freeTwoshold) {
    req.session.shippingMessage = "Ultra shipping";
    req.session.totalCartShipping = workShippingAmount;
    req.session.totalCartAmount = amount + workShippingAmount;
    return;
  }

  // If there is no country set, we estimate shipping
  if (!req.session.customerCountry) {
    req.session.shippingMessage = "salsa shipping";
    req.session.totalCartShipping = domesticShippingAmount;
    req.session.totalCartAmount = amount + domesticShippingAmount;
    return;
  }

  // Check for international
  if (
    req.session.customerCountry.toLowerCase() !==
    shippingFromCountry.toLowerCase()
  ) {
    req.session.shippingMessage = "International shipping";
    req.session.totalCartShipping = internationalShippingAmount;
    req.session.totalCartAmount = amount + internationalShippingAmount;
    return;
  }

  // Domestic shipping
  req.session.shippingMessage = "Domestic shipping";
  req.session.totalCartShipping = workShippingAmount;
  req.session.totalCartAmount = amount + workShippingAmount;
};

module.exports = {
  calculateShipping,
};
