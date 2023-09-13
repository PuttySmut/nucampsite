import { useState } from 'react';
import { Container,Row, Col } from "reactstrap";
import CampsiteDetail from '../features/campsites/CampsiteDetail';
import CampsitesList from "../features/campsites/CampsitesList";
import { selectCampsiteById } from "../features/campsites/campsiteSlice";

const CampsitesDirectoryPage = () => {
    const [campsiteId, setCampsiteId ] = useState(0);
    const selectedCampsite = selectCampsiteById(campsiteId);
    return (
        <Container>
            
            <Row>
                <Col sm='5' md='7'>
                    <CampsitesList setCampstieId={setCampsiteId}/>
                </Col>
                <Col sm='7' md='5'>
                    <CampsiteDetail campsite={selectedCampsite} />
                </Col>
            </Row>
        </Container>
    );
};
export default CampsitesDirectoryPage;
// const CampsitesDirectoryPage = () => {
//     const selectedCampsite = selectRandomCampsite();

//     const toggleCampsite = () => {
//         selectedCampsite = selectRandomCampsite();
//         console.log(selectedCampsite);
//     };

//     return (
//         <Container>
//             <Button onClick={()=> toggleCampsite() }>
//                 Select random campsite 
//             </Button>
//             <Row>
//                 <Col sm='5' md='7'>
//                  <CampsitesList/>
//                 </Col>
//                 <Col sm='7' md='5'>
//                 <CampsiteDetail campsite={selectedCampsite} />
//                 </Col>
//             </Row>

//         </Container>
//     )
// };
