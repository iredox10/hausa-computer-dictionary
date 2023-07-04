import jsonwebtoken from "jsonwebtoken"

export const verifyAdmin = (req,res,next) => {
    const authHeader = req.headers.authorization
    if (authHeader) {
        const token = authHeader.split(' ')[1]
        jsonwebtoken.verify(token, 'secret-key', (err, user) => {
            if (err) {
                res.status(401).json('token is invalid')
                return
            }
            req.user = user
            if (user.isAdmin === true) {
                next()
            } else {
                res.status(401).json('you are not admin')
            }
        })
    } else {
        res.status(403).json('you are not authenticated')
        return
    }
}