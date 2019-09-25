import { Router } from 'express';
import auth from '../middlewares/auth';
import Models from '../models';


const {
  JustCourse, FilterCourse,FilterSubscription,JustSubsription,UpdateWishList,JustUser,FilterUser
} = Models;
const router = Router();

router.post('/populer', (req, res) => JustCourse('findAll',{
  including:{
    userIncluding:true,
    userOpt:{
      opt:{
        asAdmin:true,
      }
    },
    commentIncluding:true,
    commentOpt:{
      including:{
        userIncluding:true
      }
    },
    subscriptionIncluding:true,
    subscriptionOpt:{
      including:{
        userIncluding:true
      }
    }
  }
}).then((courses) => {
  const a = [];
  courses.map((b) => a.push(FilterCourse(b)));
  return res.status(200).send(a).end();
}));
router.post('/populer/all', (req, res) => JustCourse('findAll',{
  including:{
    userIncluding:true,
    userOpt:{
      opt:{
        asAdmin:true,
      }
    },
    commentIncluding:true,
    commentOpt:{
      including:{
        userIncluding:true
      }
    },
    subscriptionIncluding:true,
    subscriptionOpt:{
      including:{
        userIncluding:true
      }
    }
  }
}).then((courses) => {
  const a = [];
  courses.map((b) => a.push(FilterCourse(b)));
  return res.status(200).send(a).end();
}));
router.post('/subscriptions', auth, (req, res) => JustSubsription('findAll',{
  opt:{
    where:{user_uid: req.user.uid}
  },
  including:{
    lessonIncluding:true,
    lessonOpt:{
      including:{
        userIncluding:true,
        userOpt:{
          opt:{
            asAdmin:true,
          }
        },
      }
    }
  }
}).then((subscriptions) => {
  const a = [];
  subscriptions.map((b) => a.push(FilterSubscription(b)));
  return res.status(200).send(a).end();
}));
router.post('/subscriptions/all', auth, (req, res) => JustSubsription('findAll',{
  opt:{
    where:{user_uid: req.user.uid}
  },
  including:{
    lessonIncluding:true,
    lessonOpt:{
      userIncluding:true,
      userOpt:{
        opt:{
          asAdmin:true,
        }
      },
    }
  }
}).then((subscriptions) => {
  const a = [];
  subscriptions.map((b) => a.push(FilterSubscription(b)));
  return res.status(200).send(a).end();
}));
router.post('/wishList', auth, (req, res) => {
  let { wishList,lessonUid } = req.body;
  UpdateWishList(lessonUid, req.user.uid, wishList).then((result) => {
    if (!result) {
      return res.status(200).send(key.returns.error).end();
    }
    return res.status(200).send(key.returns.success).end();
  });
});
router.post('/', (req, res) => JustUser({
  opt:{
    where:sequelize.where(
      sequelize.fn('lower', sequelize.col('username')),
      sequelize.fn('lower', req.body.user),
    ),
  },
  including:{
    lessonIncluding:true,
    lessonOpt:{
      opt:{
        where:sequelize.where(
          sequelize.fn('lower', sequelize.col('name')),
          sequelize.fn('lower', req.body.course.replace('-', ' ')),
        ),
      },
      including:{
        userIncluding:true,
        userOpt:{
          opt:{
            asAdmin:true,
          },
          including:{
            userDetailIncluding:true
          }
        },
        commentIncluding:true,
        commentOpt:{
          including:{
            userIncluding:true
          }
        },
        subscriptionIncluding:true,
        subscriptionOpt:{
          including:{
            userIncluding:true
          }
        }
      }
    }
  }
}).then((course) => res.status(200).send(FilterUser(course)).end()));
router.post('/auth',auth, (req, res) => JustUser({
  opt:{
    where:sequelize.where(
      sequelize.fn('lower', sequelize.col('username')),
      sequelize.fn('lower', req.body.user),
    ),
  },
  including:{
    lessonIncluding:true,
    lessonOpt:{
      opt:{
        where:sequelize.where(
          sequelize.fn('lower', sequelize.col('name')),
          sequelize.fn('lower', req.body.course.replace('-', ' ')),
        ),
      },
      including:{
        userIncluding:true,
        userOpt:{
          opt:{
            asAdmin:true,
          },
          including:{
            userDetailIncluding:true
          }
        },
        commentIncluding:true,
        commentOpt:{
          including:{
            userIncluding:true
          }
        },
        subscriptionIncluding:true,
        subscriptionOpt:{
          including:{
            userIncluding:true
          }
        },
        wishListIncluding:true,
        wishListOpt:{
          opt:{
            where:{
              users_uid:req.user.uid
            },
            required:false
          }
        }
      }
    }
  }
}).then((course) => res.status(200).send(FilterUser(course)).end()));
module.exports = router;
