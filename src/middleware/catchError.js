
export function catchError(Fn) {
    return(req, res, next) => {
      Fn(req, res, next).catch(err => {
        next(err);
      });
    }
}