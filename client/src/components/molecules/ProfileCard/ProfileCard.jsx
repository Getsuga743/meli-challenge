import PropTypes from 'prop-types';
import React from 'react';
import styles from './styles.module.scss';
import { Image, Title, Text } from 'components/atoms';
import { Card } from 'components/atoms';
import { Skeleton } from 'components/atoms';

export const ProfileCard = ({ user, loading, error }) => {
    if (loading) {
        return (
            <Card className={styles.container}>
                <div className={styles.imageContainer}>
                    <Skeleton size="avatar" />
                </div>
                <div className={styles.textContainer}>
                    <div>
                        <Skeleton size="large" className="my-2" />
                    </div>
                    <div>
                        <Skeleton size="medium" className="my-2" />
                    </div>
                </div>
            </Card>
        );
    }

    if (error) {
        return (
            <div>
                <Text>Hubo un error al cargar los datos</Text>
            </div>
        );
    }

    const { imagen, nombre_completo, nivel_descripcion } = user;
    return (
        <>
            <Card className={styles.container}>
                <div className={styles.imageContainer}>
                    <Image
                        src={imagen}
                        alt={nombre_completo}
                        rounded={true}
                        variant="profile"
                    />
                </div>
                <div className={styles.textContainer}>
                    <div>
                        <Title type="h1" size="large">
                            {nombre_completo}
                        </Title>
                        <Text type="span">{`${nombre_completo.toLowerCase()}`}</Text>
                    </div>
                    {/* esto podría ser un componente que en base al nivel Id, muestre distintos estilos */}
                    <div>
                        <Text size="small" color="dark" type="span">
                            {nivel_descripcion}
                        </Text>
                    </div>
                </div>
            </Card>
        </>
    );
};

ProfileCard.propTypes = {
    error: PropTypes.any,
    loading: PropTypes.bool,
    user: PropTypes.shape({
        imagen: PropTypes.string,
        nivel: PropTypes.string,
        nivel_descripcion: PropTypes.string,
        nombre: PropTypes.string,
        nombre_completo: PropTypes.string,
    }),
};
