 //Given a list of products and a searchWord a consumer could be searching for
 //This function outputs a list of lists containing the first 3 products to appear 
 //as a result in alphabetical order as each character is being typed
 //assuming all products and the search word is only in lowercase

 function suggestedProducts(products, searchWord) {
    const output = [];
    let searchSubString = ``;
    
    products.sort();
    for (let i = 0; i < searchWord.length; i++) {
        const char = searchWord[i];
        searchSubString += char;
        
        let suggestProductCount = 0;
        const suggestProducts = [];
        
        let j = 0;
        while (j < products.length && suggestProductCount < 3) {
            if (products[j].startsWith(searchSubString)) {
                suggestProductCount++
                suggestProducts.push(products[j]);
            }
            
            j++
        }
        output.push(suggestProducts);
    }
    return output;
};