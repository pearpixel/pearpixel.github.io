import Head_exp from '../comp/head_exp';

const lsgame = () => {
    return (
        <>
            <Head_exp 
                heading="🙈" 
                exp_content={
                    <>
                    <h1>🐒</h1>
                    <div>🙊</div>
                    </>
                        }
            />
            <Head_exp
                heading="😂"
                exp_content={
                    <>
                        <h1>😎</h1>
                    </>
                }
            />
    </>
    );
};

export default lsgame;