import React from "react";
import TourCard from "../../shared/TourCard";

import { Col } from "reactstrap";

import useFetch from "./../../hooks/useFetch";
import { BASE_URL } from "../../utils/config";

const FeaturedTourList = () => {
    const {
        data: featuredTours,
        loading,
        error,
    } = useFetch(`${BASE_URL}/tours/search/getFeaturedTours`);

    return (
        <React.Fragment>
            {loading && <h4>Loading...........</h4>}
            {error && <h4>{error}</h4>}
            {!loading && !error && featuredTours?.map(tour => (
                    <Col lg="3" md="6" sm="6" className="mb-4" key={tour._id}>
                        <TourCard tour={tour}/>
                    </Col>
            ))}
        </React.Fragment>
    );
};

export default FeaturedTourList;
