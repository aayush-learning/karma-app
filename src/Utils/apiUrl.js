export const TEST_API = 'https://random.dog/woof.json';
export const BASE_API = 'http://stock.ap-south-1.elasticbeanstalk.com/';
export const BASE_FEED_API = 'http://feedservice-social.ap-south-1.elasticbeanstalk.com/';

// Feed related Api end points
export const LISTED_STOCKS = `${BASE_API}stock/getStocksByCategoryId/{categoryId}`;
export const STOCK_CATEGORY = `${BASE_FEED_API}user/category/all`;
export const BUY_OR_SELL_ORDER = `${BASE_API}stock/newOrderByUser`;
export const MY_CURRENT_ORDER = `${BASE_API}myOrders/{userId}`;
export const PORTFOLIO = `${BASE_API}stock/myPortfolio/{userId}`;
export const USER_LOGIN = '';
export const GET_LEADERBOARD = '';
export const GET_FEED = '';
export const GET_PROFILE = '';
export const SEARCH = '';
export const TRENDING = '';

// stock related Api end points
