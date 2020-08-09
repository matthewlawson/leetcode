/**
 * @param {number[]} prices
 * @return {number}
 */

export function bruteForce(prices) {
    let maxProfit = 0;
    for(let i = 0; i < prices.length - 1; i++) {
        for (let j = i + 1; j < prices.length; j++) {
            maxProfit = Math.max(maxProfit, prices[j] - prices[i]);
        }
    }

    return maxProfit;
}

/**
 * @param {number[]} prices
 * @return {number}
 */
export function linearTime(prices) {
    let minPrice = prices[0];
    let maxProfit = 0;
    for(let i = 0; i < prices.length; i++) {
        if(prices[i] < minPrice) {
            minPrice = prices[i];
        }
        else if(prices[i] - minPrice > maxProfit) {
            maxProfit = prices[i] - minPrice;
        }
    }

    return maxProfit;
}
