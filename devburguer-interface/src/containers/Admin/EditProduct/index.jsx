import { Navigate, useLocation } from 'react-router-dom';

import { ProductForm } from '../ProductForm';

export function EditProduct() {
	const { state } = useLocation();

	if (!state?.product) {
		return <Navigate to="/admin/produtos" replace />;
	}

	return <ProductForm product={state.product} />;
}
