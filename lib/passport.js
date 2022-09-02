import passport from 'passport'
import LocalStrategy from 'passport-local'

passport.serializeUser((user, done) => {
    done(null, user._id);
});

passport.deserializeUser((id, done) => {
    adn.findOne({ _id: new ObjectID(id) }, (err, doc) => {
        done(null, doc);
    });
});   

passport.use(new LocalStrategy(
    (username, password, done) => {
        adn.findOne({username: username}, (err, user) => {
            console.log("User " + username + " attempted to login");
            if (err) {return done(err); }
            if (!user) {return done(null, false);}
            if (!bcrypt.compareSync(password, user.password)) {return done(null, false);}
            return done(null, user)
        });
    }
));

export default passport