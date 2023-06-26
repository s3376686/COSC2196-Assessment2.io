const ProjectIdea = () => {
    return (
        <div class="container">
            <h2 className="text-start">Project Idea</h2>
            <h4 className="text-start">Overview</h4>
            <p className="text-start">My project idea is to develop a web application that produces data visualizations of personal expenses. The application will provide users with a centralized platform to analyze and visualize their spending habits using tools such as Elasticsearch and Kibana. By leveraging these technologies, the web app aims to simplify the process of estimating monthly expenses, making it easier for individuals to manage their finances effectively.</p>
            <h4 className="text-start">Motivation</h4>
            <p className="text-start">
                The motivation behind this project stems from personal experiences, specifically when applying for a mortgage. During that process, I realized the challenge of accurately estimating monthly expenses solely based on bank statements. Bank statements contain a lot of raw unprocessed data. The only data filtering offered by my bank was selecting a time range or a text search. There was no automation of reading the transactions and classifying them. Therefore, in order to determine my monthly expenses, I manually read the statements and classified each transaction.
                From my experience as a software integration tester, I had seen tools such as Elasticsearch used to analyze application logs and extract data to be used in visualizations. There is no reason why this could not also be done with bank transactions. I'm sure that some banks already offer this service to customers, but it doesn't yet seem to be universal to all banks in my experience.
                This inspired my idea to create a web app that collects and processes bank transaction (and maybe other institution) data, allowing users to gain valuable insights into their spending patterns. This would allow users to more confidently estimate their expenses, empowering them to make more informed financial decisions. Additionally, the web app will offer an efficient and user-friendly interface, presenting users with intuitive data visualizations that provide a clear overview of their expenditure patterns.
            </p>
            <h4 className="text-start">Description</h4>
            <p className="text-start">The web app would be composed of the following parts:</p>
            <ul>
                <li className="text-start">A front-end web interface.</li>
                <li className="text-start">A back-end data processing and storage.</li>
                <li className="text-start">A method of collecting or uploading data with some preprocessing.</li>
            </ul>
            <h5 className="text-start">Front End</h5>
            <p className="text-start">
                The front end would be designed as a dashboard which would display visualisations of the data. The visualizations would be interactive. The user would be able to select ranges and filter the data as required. Some initial ideas for visualisations are:
            </p>
            <ul>
                <li className="text-start">Pie chart of expenses by category</li>
                <li className="text-start">Line graph of balance over time</li>
            </ul>
            <h5 className="text-start">Back End</h5>
            <p className="text-start">
                The backed is where all the data processing would occur. Each line of transaction would be read and processed into an object with values such as “category”. An example of this would be transactions from “Red Energy” and “RACV” would have a “category” of utilities and insurance respectively. Some initial ideas for the values of transaction objects are:
            </p>
            <ul>
                <li className="text-start">timestapm</li>
                <li className="text-start">category</li>
                <li className="text-start">essential</li>
                <li className="text-start">payee</li>
            </ul>
            <h5 className="text-start">Data Collection</h5>
            <p className="text-start">
                For the web application to be useful to a wide variety of users will require multiple methods of collecting data. Some Banks may provide an API to their customers do download statement whereas others may only allow them to download their statements as CSV files through a website.
                <br></br><br></br>
                The web app should provide the ability to upload a bank statement CSV as this would be the most broadly useful method of collecting data. Automated methods of data collection using API or web scraping will be investigated and implement for my own bank which is a large institution. Using automated methods would require the secure storage of passwords and usernames using techniques such as hashing and salting.
                <br></br><br></br>
                Once the data is retrieved, it will be processed and analysed using Elasticsearch, a powerful search and analytics engine. Elasticsearch's robust features, such as indexing and querying capabilities, will enable efficient data processing and retrieval. Furthermore, Elasticsearch will provide advanced search functionalities, allowing users to filter and extract specific information from their financial data.
            </p>
            <h4 className="text-start">Tools and Technologies</h4>
            <p className="text-start">
                To ensure a smooth and scalable deployment of the application, a microservices architecture will be adopted using Docker. Docker provides the capability to containerize individual components, simplifying deployment and management. The application will consist of several Docker containers, including Elastic, Kibana, Nginx, Python and Node. Docker Compose will be utilized to define and manage the application's services.
                <br></br><br></br>
                For the front-end components, the web app will utilize Kibana and Nginx containers. Kibana, an open-source data visualization platform that integrates seamlessly with Elasticsearch and offers a wide range of visualizations such as charts, graphs, and dashboards. Nginx is a web server that will enhance the app's security when hosted on the internet, incorporating features such as reverse proxy.
                <br></br><br></br>
                The analytics engine of the web app will be implemented using Elasticsearch. As a versatile search and analytics engine, Elasticsearch can effectively process and analyse the collected data. It provides a REST API to access the processed information.
                <br></br><br></br>
                Data collection will involve users uploading CSV files and limited automated data collection. For user-uploaded CSV files, a simple web page will be created, enabling users to submit their data. A Python container with a Flask app will be used to handle the web interface, perform pre-processing of the CSV files, and send the data to Elasticsearch using the REST API. This process can be implemented using various programming languages, but in this project, Python will be utilized for its simplicity and suitability.
                <br></br><br></br>
                For automated data collection where an API is not available web scraping will be required. This will be done with a node container with the Puppeteer library as an NPM project. This container will be responsible for retrieving the bank statements from the online sources. However, if an API is available for retrieving bank statement data, another Python container will be used for data retrieval.
            </p>

            <h4 className="text-start">Skills Required</h4>
            <p className="text-start">This project will require the following skills to be completed:</p>
            <ul>
                <li className="text-start">Configuring Elasticsearch</li>
                <li className="text-start">Writing data visualizations in Kibana</li>
                <li className="text-start">Regex for data extraction</li>
                <li className="text-start">Writing NGINX conf file</li>
                <li className="text-start">Python programming</li>
                <li className="text-start">JavaScript programming</li>
                <li className="text-start">GIT</li>
                <li className="text-start">YAML and Docker</li>
            </ul>
            <p className="text-start">The only hardware required is a Linux computer or a Windows computer that can run WSL 2. Attaining the above skills is achievable as all the technologies are mature and well documented. There are lots of online tutorial and resources for all the above technologies.</p>
            <h4 className="text-start">Outcome</h4>
            <p className="text-start">The outcome of the successful development of this web app would be to provide transparency to the users about their finances and allow better financial management. While there may be similar services online this project will provide the ultimate flexibility to the user by allowing them to process their own data and visualise it in any way they choose.</p>
        </div>
    )
}

export default ProjectIdea;