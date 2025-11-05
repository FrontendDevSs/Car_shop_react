import "./shop.scss";

import { BACKEND_URL } from "../../config";
import useFetch from "../../hooks/useFetch";
import Card from "../../components/ui/card/Card";

function Shop() {
    const { data, loading, error } = useFetch(BACKEND_URL);
    const cars = Array.isArray(data) ? data : data?.cars ?? [];
    const shopCars = cars.slice(0, 12);

    return (
        <section className="shop">
            <div className="shop-div">
                <h1 className="shop-title">Explore our offer</h1>

                {loading && <p className="shop-status">Loading…</p>}
                {error && <p className="shop-error">Failed to load.</p>}

                {!loading && !error && (
                    <div className="shop-grid">
                        {shopCars.map((car) => (
                            <Card key={car._id ?? car.id} car={car} />
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
}

export default Shop;