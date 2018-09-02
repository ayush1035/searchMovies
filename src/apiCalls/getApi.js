import * as path from "../constants/pathConstants.js";

export const getApiCall = () => {
    let url = path.PATH_GET;
    return fetch(url, {
        method: 'get'
    }).then((response) => {
        return response.json();
    }).then((data) => {
        let countries = [];
        let languages = [];
        for(var i=0;i<data.length;i++)
          {
              if(countries.indexOf(data[i].country)==-1)
              {
                  if(data[i].country!=="")
                  countries.push(data[i].country);
              }
              if(languages.indexOf(data[i].language)==-1)
              {
                if(data[i].language!=="")
                  languages.push(data[i].language);
              }
          } 
          var obj = {countries:countries,languages:languages,movies:data};  
          return obj; 
    });
};

export const getApiCountryCall = (country) => {
    let url = path.PATH_GET; 
    return fetch(url, {
        method: 'get'
    }).then((response) => {
        return response.json();
    }).then((data) => {
        let filteredMovies = [];
        for(var i=0;i<data.length;i++)
        {
            if(data[i].country==country)
            {
                filteredMovies.push(data[i]);
            }
        }
        let countries = [];
        let languages = [];
        for(var i=0;i<data.length;i++)
          {
              if(countries.indexOf(data[i].country)==-1)
              {
                if(data[i].country!=="")
                  countries.push(data[i].country);
              }
              if(languages.indexOf(data[i].language)==-1)
              {
                if(data[i].language!=="")
                  languages.push(data[i].language);
              }
          } 
        var obj = {countries:countries,languages:languages,movies:filteredMovies};
        return obj;
    });
};

export const getApiLanguageCall = (language) => {
    let url = path.PATH_GET; 
    return fetch(url, {
        method: 'get'
    }).then((response) => {
        return response.json();
    }).then((data) => {
        let filteredMovies = [];
        for(var i=0;i<data.length;i++)
        {
            if(data[i].language==language)
            {
                filteredMovies.push(data[i]);
            }
        }
        let countries = [];
        let languages = [];
        for(var i=0;i<data.length;i++)
          {
              if(countries.indexOf(data[i].country)==-1)
              {
                if(data[i].country!=="")
                  countries.push(data[i].country);
              }
              if(languages.indexOf(data[i].language)==-1)
              {
                if(data[i].language!=="")
                  languages.push(data[i].language);
              }
          } 
        var obj = {countries:countries,languages:languages,movies:filteredMovies};
        return obj;
    });
};

export const getApiSearchCall = (searchData) => {
    let url = path.PATH_GET; 
    return fetch(url, {
        method: 'get'
    }).then((response) => {
        return response.json();
    }).then((data) => {
        let filteredMovies = [];
        for(var i=0;i<data.length;i++)
        {
            if(data[i].movie_title.toLowerCase().includes(searchData))
            {
                filteredMovies.push(data[i]);
            }
        }
        let countries = [];
        let languages = [];
        for(var i=0;i<data.length;i++)
          {
              if(countries.indexOf(data[i].country)==-1)
              {
                if(data[i].country!=="")
                  countries.push(data[i].country);
              }
              if(languages.indexOf(data[i].language)==-1)
              {
                if(data[i].language!=="")
                  languages.push(data[i].language);
              }
          } 
        var obj = {countries:countries,languages:languages,movies:filteredMovies};
        return obj;
    });
};

export const getSortByYear = () => {
    let url = path.PATH_GET; 
    return fetch(url, {
        method: 'get'
    }).then((response) => {
        return response.json();
    }).then((data) => {
      let filteredMovies= data.sort(comp);  
      let countries = [];
        let languages = [];
        for(var i=0;i<data.length;i++)
          {
              if(countries.indexOf(data[i].country)==-1)
              {
                if(data[i].country!=="")
                  countries.push(data[i].country);
              }
              if(languages.indexOf(data[i].language)==-1)
              {
                if(data[i].language!=="")
                  languages.push(data[i].language);
              }
          } 
        var obj = {countries:countries,languages:languages,movies:filteredMovies};
        return obj;     
    });
};


function comp(a, b) {
    return new Date(b.title_year).getTime()-new Date(a.title_year).getTime();
};



