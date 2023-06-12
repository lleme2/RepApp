function encrypt(dados){
    const saltRounds = 10;
    const pass = dados;
  
    const salt = bcrypt.genSaltSync(saltRounds);
    const hash = bcrypt.hashSync(pass,salt);
    return hash;
}

module.export = {encrypt}