import React, { Component } from 'react'
import { useRouter } from 'next/router'

export default class GettingStarted extends Component {
    constructor(props) {
      super(props);
      this.state = {
          resources: this.props.resourceData,
          filteredResources: [], 
          resourceFilters: [],
          totalPages: [],
          currentPage: 0,
          prevPage: -1, 
          nextPage: 1, 
          selectedFilters: [],
      };


      this.nextPage = this.nextPage.bind(this);
      this.prevPage = this.prevPage.bind(this);
      this.toggleTag = this.toggleTag.bind(this);

    }

    nextPage(event){
        let nextPageNumber = event.target.getAttribute("data-page");

        this.setState({
            currentPage: parseInt(nextPageNumber),
            prevPage: parseInt(nextPageNumber) - 1, 
            nextPage: parseInt(nextPageNumber) + 1, 
        });
    }

    prevPage(event){
        let prevPage = event.target.getAttribute("data-page");

        this.setState({
            currentPage: parseInt(prevPage),
            prevPage: parseInt(prevPage) - 1, 
            nextPage: parseInt(prevPage) + 1, 
        });
    }

    toggleTag(event, prevalue = 0){


        this.setState({
            selectedFilters: [],
        });

        if(event.type === "keydown"){
            if(event.which === 32 || event.which === 13){

                if(prevalue.length > 0){
                    var selectedElement = document.querySelectorAll(`[data-category="${prevalue}"]`);
                    
                    if(selectedElement[0].classList.contains("active")){
                        selectedElement[0].classList.remove("active");
                    }else{
                        selectedElement[0].classList.add("active");
                    }
                    
                }else{
                    if(event.target.classList.contains("active")){
                        event.target.classList.remove("active");
                    }else{
                        event.target.classList.add("active");
                    }
                }
        
                var activeTags = [...document.querySelectorAll(".filter__tags .active")];
                var selectedFiltersHolder = [];
        
                activeTags.map((activeTag) => {
                    selectedFiltersHolder.push(activeTag.getAttribute("data-category"));
                    return true; 
                })
                
                this.setState({
                    selectedFilters: selectedFiltersHolder,
                });
        
                // We create the new array of resources based on the selected filters
                let newResources = []; 
        
                if(selectedFiltersHolder.length > 0){
                    selectedFiltersHolder.map((selected_filter) => {
                        this.state.resources.map((resource) => {
                            let categoryName = resource.acf.resource_category.label.replace(/ /g, '').replace(/,/g, '') .replace(/-/g, '') .replace(/!/g, '').replace(/ /g, '').replace(/'/g, '').replace(/\//g, '').replace(/\./g, '').toLowerCase();
        
                            if(categoryName === selected_filter){
                                newResources.push(resource);
                            }
                        })
                    })
                }else{
                    newResources = this.props.resourceData;
                }
        
                newResources = [...new Set(newResources)];
        
                // Create first batch of resources
                var perChunk = 6 // items per chunk    
        
                var inputArray = newResources;
                
                var result = inputArray.reduce((resultArray, item, index) => { 
                  const chunkIndex = Math.floor(index/perChunk)
                
                  if(!resultArray[chunkIndex]) {
                    resultArray[chunkIndex] = [] // start a new chunk
                  }
                
                  resultArray[chunkIndex].push(item)
                
                  return resultArray
                }, [])
        
                this.setState({
                    filteredResources: result,
                    totalPages: Math.ceil(newResources.length / 6),
                });  
            }
        }else if(event.type === "click"){
            if(prevalue.length > 0){
                var selectedElement = document.querySelectorAll(`[data-category="${prevalue}"]`);
                
                if(selectedElement[0].classList.contains("active")){
                    selectedElement[0].classList.remove("active");
                }else{
                    selectedElement[0].classList.add("active");
                }
                
            }else{
                if(event.target.classList.contains("active")){
                    event.target.classList.remove("active");
                }else{
                    event.target.classList.add("active");
                }
            }
    
            var activeTags = [...document.querySelectorAll(".filter__tags .active")];
            var selectedFiltersHolder = [];
    
            activeTags.map((activeTag) => {
                selectedFiltersHolder.push(activeTag.getAttribute("data-category"));
                return true; 
            })
            
            this.setState({
                selectedFilters: selectedFiltersHolder,
            });
    
            // We create the new array of resources based on the selected filters
            let newResources = []; 
    
            if(selectedFiltersHolder.length > 0){
                selectedFiltersHolder.map((selected_filter) => {
                    this.state.resources.map((resource) => {
                        let categoryName = resource.acf.resource_category.label.replace(/ /g, '').replace(/,/g, '') .replace(/-/g, '') .replace(/!/g, '').replace(/ /g, '').replace(/'/g, '').replace(/\//g, '').replace(/\./g, '').toLowerCase();
    
                        if(categoryName === selected_filter){
                            newResources.push(resource);
                        }
                    })
                })
            }else{
                newResources = this.props.resourceData;
            }
    
            newResources = [...new Set(newResources)];
    
            // Create first batch of resources
            var perChunk = 6 // items per chunk    
    
            var inputArray = newResources;
            
            var result = inputArray.reduce((resultArray, item, index) => { 
              const chunkIndex = Math.floor(index/perChunk)
            
              if(!resultArray[chunkIndex]) {
                resultArray[chunkIndex] = [] // start a new chunk
              }
            
              resultArray[chunkIndex].push(item)
            
              return resultArray
            }, [])
    
            this.setState({
                filteredResources: result,
                totalPages: Math.ceil(newResources.length / 6),
            });  
        }

    }



    componentWillMount(){

        // Create Filters
        let categoryFilters = [];
        this.props.resourceData.map((resource) => {
            let categoryObject = []; 
            
            categoryFilters.push(resource.acf.resource_category.label)

            return true
        })

        categoryFilters = [...new Set(categoryFilters)];

        this.setState({
          resourceFilters: categoryFilters,
        });

    }

    componentDidMount(){
        // Create first batch of resources
        var perChunk = 6 // items per chunk    

        var inputArray = this.props.resourceData;
        
        var result = inputArray.reduce((resultArray, item, index) => { 
          const chunkIndex = Math.floor(index/perChunk)
        
          if(!resultArray[chunkIndex]) {
            resultArray[chunkIndex] = [] // start a new chunk
          }
        
          resultArray[chunkIndex].push(item)
        
          return resultArray
        }, [])
        
        this.setState({
          filteredResources: result,
          totalPages: Math.ceil(this.props.resourceData.length / 6),
        });  

        var queryString = window.location.search;

        if(queryString.length > 0){           
            
            queryString = queryString.replace(/\?/g, '').split("&");
            queryString =  queryString[0].split("=")[1].replace(/ /g, '').replace(/,/g, '') .replace(/-/g, '') .replace(/!/g, '').replace(/ /g, '').replace(/'/g, '').replace(/\//g, '').replace(/\./g, '').toLowerCase();

            if(queryString === "hunger"){
                queryString = "hungerandfoodaccess"; 
            }
            
            if(queryString === "health"){
                queryString = "mentalhealthsocialisolation"; 
            }

            this.toggleTag("0", queryString); 
        }
  
    }

    render() {
        return (
            <main className={'getting__started'}>
                <section id="main__hero">
                    <div className="main__hero__background">
                        <img loading="lazy" src={this.props.pageData.better_featured_image.source_url} alt={`Getting Started Background`}/>
                    </div>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 no__padding">
                                <div className="main__hero__title">
                                    <h2
                                        className={`poppins bold xxmd white-text`}
                                        dangerouslySetInnerHTML={{ __html: this.props.acfData.acf.title }}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="main__hero__resources row">
                            {
                                this.props.acfData.acf.featured_resources.map((resource, index) => (
                                    <div className="resource" key={index}>
                                        <a href={resource.acf.external_link} target="_BLANKK">
                                            <div className="resource__title">
                                                <h2
                                                    className={`poppins bold lg white-text`}
                                                    dangerouslySetInnerHTML={{ __html: resource.post_title }}
                                                />
                                            </div>
                                            <div className="resource__subtitle">
                                                <p
                                                    className={`poppins bold sm white-text text-uppercase`}
                                                    dangerouslySetInnerHTML={{ __html: resource.acf.subtitle }}
                                                />
                                            </div>
                                        </a>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </section>

                <section id="resource__filter">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 resource__filter__title text-left no__padding">
                                <h2
                                    className={`poppins  bold teal-text `}
                                    dangerouslySetInnerHTML={{ __html: this.props.acfData.acf.resources_filter_title
                                    }}
                                />
                            </div>
                        </div>
                        <div className="row filter__tags">
                            <div className="container">
                                <div className="row">
                                    {
                                        this.state.resourceFilters.map((resource, index) => (
                                            <div 
                                                tabIndex="0"
                                                className={`resource__filter__tag`} 
                                                data-category={`${resource.replace(/ /g, '')
                                                    .replace(/,/g, '') 
                                                    .replace(/-/g, '') 
                                                    .replace(/!/g, '')
                                                    .replace(/ /g, '')
                                                    .replace(/'/g, '')
                                                    .replace(/\//g, '')
                                                    .replace(/\./g, '')
                                                    .toLowerCase()}`
                                                }
                                                key={index}
                                                onClick={this.toggleTag} onKeyDown={this.toggleTag} key={index}
                                                >
                                                <p className={`poppins bold md text-uppercase`}>
                                                    {resource}
                                                </p>
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>
                        </div>
                        <div className="row filter__results">
                            <div className="container">
                                <div className="row">
                                    {
                                        <>
                                            {
                                                this.state.filteredResources.length
                                                ?
                                                <>
                                                    {
                                                        this.state.filteredResources[this.state.currentPage].map((filtered, index) => (
                                                            <div 
                                                              className={`filter__result__item ${filtered.acf.resource_category.label.replace(/ /g, '')
                                                              .replace(/,/g, '') 
                                                              .replace(/-/g, '') 
                                                              .replace(/!/g, '')
                                                              .replace(/ /g, '')
                                                              .replace(/'/g, '')
                                                              .replace(/\//g, '')
                                                              .replace(/\./g, '')
                                                              .toLowerCase()}`}
                                                              key={index}
                                                              >
                                                                <div className="category__icon">
                                                                    {
                                                                        
                                                                        filtered.acf.resource_category.label.replace(/,/g, '') .replace(/-/g, '') .replace(/!/g, '').replace(/'/g, '').replace(/ /g, '').replace(/\./g, '').replace(/\./g, '').toLowerCase() === "hungerandfoodaccess"
                                                                        ?
                                                                        <img  loading="lazy" src="/images/Grupo1991.svg" alt={`${filtered.title.rendered} icon`}/>
                                                                        : ""
                                                                    }
                                                                    {
                                                                        filtered.acf.resource_category.label.replace(/,/g, '') .replace(/-/g, '') .replace(/!/g, '').replace(/'/g, '').replace(/ /g, '').replace(/\./g, '').replace(/\./g, '').toLowerCase() === "education"
                                                                        ?
                                                                        <img loading="lazy" src="/images/Grupo2044.svg" alt={`${filtered.title.rendered} icon`}/>
                                                                        : ""
                                                                    }
                                                                    {
                                                                        filtered.acf.resource_category.label.replace(/,/g, '') .replace(/-/g, '') .replace(/!/g, '').replace(/'/g, '').replace(/ /g, '').replace(/\./g, '').replace(/\./g, '').toLowerCase() === "employment"
                                                                        ?
                                                                        <img loading="lazy" src="/images/Grupo2045.svg" alt={`${filtered.title.rendered} icon`}/>
                                                                        : ""
                                                                    }
                                                                    {
                                                                        filtered.acf.resource_category.label.replace(/,/g, '') .replace(/-/g, '') .replace(/!/g, '').replace(/'/g, '').replace(/ /g, '').replace(/\//g, '').replace(/\./g, '').toLowerCase() === "mentalhealthsocialisolation"
                                                                        ?
                                                                        <img  loading="lazy" src="/images/Grupo2046.svg" alt={`${filtered.title.rendered} icon`}/>
                                                                        : ""
                                                                    }
                                                                </div>
                                                                <div className="filtered__resource__item">
                                                                    <h2 className={`title poppins teal-text bold xxl`}>{filtered.title.rendered}</h2>
                                                                    <p className={`title poppins gray-text bold text-uppercase sm`}>{filtered.acf.subtitle}</p>
                                                                </div>
                                                                <div className="filtered__resource__link">
                                                                    <a href={filtered.acf.external_link}>
                                                                        <span className="absolute__name">{filtered.title.rendered}</span>
                                                                        <svg xmlns="http://www.w3.org/2000/svg" width="29.889" height="11.96" viewBox="0 0 29.889 11.96">
                                                                        <path id="Hover" d="M34.513.25A.854.854,0,1,0,33.3,1.458l3.667,3.667H10V6.835H36.972L33.3,10.5a.854.854,0,1,0,1.208,1.208l5.126-5.126a.854.854,0,0,0,0-1.208Z" transform="translate(-10)" fill="#015d5d" fillRule="evenodd"/>
                                                                        </svg>
                                                                    </a>
                                                                </div>
                                                            </div>
                                                        )) 
                                                    }
                                                </>
                                                : ""
                                            }
                                        </>
                                    }
                                </div>
                            </div>
                        </div>
                        <div className="row filter__pagination">
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-12">
                                        {
                                            this.state.prevPage >= 0
                                            ?
                                            <p className={`filter__pagination__page__changer`} data-page={this.state.prevPage} data-total={this.state.totalPages} onKeyDown={this.prevPage} onClick={this.prevPage}><span>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="7.27" height="12.722" viewBox="0 0 7.27 12.722">
                                                    <path id="Hover" d="M102.219,29.952l-4.887,4.739a.909.909,0,1,0,1.285,1.285l5.453-5.453a.907.907,0,0,0,0-1.284h0l-5.447-5.45a.91.91,0,0,0-1.29,1.285l4.887,4.879" transform="translate(104.336 36.242) rotate(180)" fill="#00a99e" fillRule="evenodd"/>
                                                </svg>

                                                </span>
                                            </p>
                                            : ""
                                        }
                                        <div className="filter__pagination__current">
                                            <p>{this.state.currentPage+1}</p>
                                        </div>
                                        <div className="filter__pagination__current">
                                            <p>OF</p>
                                        </div>
                                        <div className="filter__pagination__current">
                                            <p>{this.state.totalPages}</p>
                                        </div>
                                        {
                                            this.state.nextPage != this.state.totalPages 
                                            ?
                                            <p className={`filter__pagination__page__changer`} data-page={this.state.nextPage} data-total={this.state.totalPages} onKeyDown={this.nextPage} onClick={this.nextPage}>

                                                <span>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="7.27" height="12.722" viewBox="0 0 7.27 12.722">
                                                        <path id="Hover" d="M102.219,29.952l-4.887,4.739a.909.909,0,1,0,1.285,1.285l5.453-5.453a.907.907,0,0,0,0-1.284h0l-5.447-5.45a.91.91,0,0,0-1.29,1.285l4.887,4.879" transform="translate(-97.066 -23.52)" fill="#00a99e" fillRule="evenodd"/>
                                                    </svg>
                                                </span>
                                            </p>
                                            : ""
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        )
    }
}

// This gets called on every request
export async function getServerSideProps() {
    const res = await fetch(`${process.env.ProjectUrl}/wp-json/acf/v3/pages/194`)
    const acfData = await res.json()
  
    const resData = await fetch(`${process.env.ProjectUrl}/wp-json/wp/v2/pages/194`)
    const pageData = await resData.json()

    const resDataResource = await fetch(`${process.env.ProjectUrl}/wp-json/wp/v2/resource?per_page=100`)
    const resourceData = await resDataResource.json()

    return {
        props: {
          acfData,
          pageData,
          resourceData
        },
    }
  }
  
  