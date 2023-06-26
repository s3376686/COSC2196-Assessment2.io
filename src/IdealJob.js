import IdealJobWebPage from "./IdealJob.pdf"

const IdealJob = () => {

    return (
        <div className="container">
        <h1>Ideal Job</h1>
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">DevOps Engineer</h5>
            <p className="card-text">
            My ideal job would be a <a href="https://www.seek.com.au/job/67754484?type=standout#sol=b964fe41e8bfce4479869923f6f2df768c3192ea">DevOps Engineer</a><a href={IdealJobWebPage} target="_blank" rel='noopener noreferrer'> [pdf]</a>. DevOps Engineers specialize in automating processes between software development and operational systems. They are responsible for setting up CI/CD pipelines and scalable infrastructure to ensure efficient software delivery. What appeals to me about DevOps is the opportunity to work with a wide range of technologies and the unique combination of software development and automation skills. To become a DevOps Engineer, the typical qualifications include a tertiary qualification in Computer Science or a related field, knowledge of the software development lifecycle, and proficiency in automation tools such as Jenkins, deployment tools like Kubernetes, and working in cloud environments like AWS or Azure. My plan to achieve this career path involves completing my degree and pursuing cloud certifications. Additionally, I aim to gain practical experience by setting up a home lab to work with relevant tools firsthand.
            </p>
          </div>
        </div>
        </div>
    )
}

export default IdealJob