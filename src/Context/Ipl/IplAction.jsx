export const getIplNews = async() =>{

    const response = await fetch(`https://newsapi.org/v2/everything?q=ipl&from=2023-03-17&sortBy=publishedAt&apiKey=59a6cc85fcf94646ab3959a6a5eccd70`)
    const data = await response.json()
     return data.articles

}