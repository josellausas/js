// An array of hotels
import { hotels } from './data/hotels';

/**
 * Some Functions
 */
function listHotels() {
  [...hotels].forEach(h => console.log(`${h.brand}`));
}

function listHotelsAlphabetically() {
  hotels.sort( (a,b) => a - b).forEach(h => console.log(`${h.brand}`));
}

function getCheapest() {
  let cheapest = null;
  hotels.forEach(h => {
    if(cheapest === null){
      cheapest = h;
    } 
    if(h.price < cheapest.price){
      cheapest = h;
    }
  })
  return cheapest;
}

function getCostliest() {
  let cheapest = null;
  hotels.forEach(h => {
    if(cheapest === null){
      cheapest = h;
    } 
    if(h.price > cheapest.price){
      cheapest = h;
    }
  })
  return cheapest;
}

function hotelAccumulator(counter, binaryEvalFn){
  return function(hotels){
    hotels.forEach( h => {
      if(binaryEvalFn(h)) {
        counter++;
      }
    });
    return counter;
  } 
}

const hasPrice = (hotel) => typeof hotel.price === "number"




// Run it:
listHotels();
getCheapest();  //?
getCostliest(); //?

// Create a memo-cache for storing already calculated values
const memoSomething = (callb) => {
  const cache = {};
  let cacheHits = 0;
  return function(...args){
    const key = JSON.stringify(...args);
    if(key in cache) {
      cacheHits++; //?
      console.log("using cached value...");
      return cache[key];
    } else {
      console.log("calculating value...");
      const result = callb(...args);
       // ?
      cache[key] = result;
      return result;
    }
  }
}

const memoCostliest = memoSomething(getCheapest);
memoCostliest("A", 3); //?
memoCostliest("B"); // ?
memoCostliest("B"); // ?

// Lazyly calculate if a hotel has a price
const memoHasPrice = memoSomething(hasPrice);
let hotelsWithPricesCount = 0; 
const calculateHotelsWithPrices = hotelAccumulator(0, memoHasPrice);
hotelsWithPricesCount = calculateHotelsWithPrices(hotels); //?
hotelsWithPricesCount = calculateHotelsWithPrices(hotels); //?
hotelsWithPricesCount = calculateHotelsWithPrices(hotels); //?
hotelsWithPricesCount = calculateHotelsWithPrices(hotels); //?
hotelsWithPricesCount = calculateHotelsWithPrices(hotels); //?
hotelsWithPricesCount = calculateHotelsWithPrices(hotels); //?
hotelsWithPricesCount = calculateHotelsWithPrices(hotels); //?
hotelsWithPricesCount = calculateHotelsWithPrices(hotels); //?
hotelsWithPricesCount = calculateHotelsWithPrices(hotels); //?



