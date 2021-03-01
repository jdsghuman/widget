import currency from 'currency.js'

export const campaignData = {
  waterProject: {
    name: 'The Water Project - Global Initiative',
    goal: 5000,
    amountRaised: 1500,
  },
  foodDriveOrlando: {
    name: 'Orlando Meals on Wheels',
    goal: 10000,
    amountRaised: 6000,
  },
}

export const defaultDollarAmount = [5, 10, 25, 50]

export const truncateText = (text, maxLength) => {
  return text && text.length > maxLength
    ? `${text.substring(0, maxLength)}...`
    : text
}

export const getCampaignData = (organization) => campaignData[organization]

export const formatCurrency = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  minimumFractionDigits: 2,
})

export const setCampaignAmountRaised = (amountRaisedByUser, organization) => {
  const amountInital = campaignData[organization].amountRaised
  const total = currency(amountInital).add(amountRaisedByUser)

  // Update campaign amountRaised -- MOCK
  campaignData[organization].amountRaised = total.value
}

export const getProgressBarPercentage = (totalRaised, goal) => {
  return (totalRaised / goal) * 100
}
