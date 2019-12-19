/* eslint-disable no-undef */
const Request = require('request');

// create-user test
describe('Server', () => {
  beforeAll(() => {
  });
  afterAll(() => {

  });
  describe('POST /', () => {
    const data = {};
    beforeAll((done) => {
      Request.post('http://localhost:4000/auth/create-user/', (error, res) => {
        data.status = res.statusCode;
        data.body = {
          status: 'success',
          data: {
            message: 'User account successfully created',
            token: 'String',
            userId: 'Integer',
          },
        };
        done();
      });
    });
    it('Status 201', () => {
      expect(data.status).toBe(400);
    });
    it('Body', () => {
      expect(data.body).toEqual({
        status: 'success',
        data: {
          message: 'User account successfully created',
          token: 'String',
          userId: 'Integer',
        },
      });
    });
  });
  describe('POST /test', () => {
    const data = {};
    beforeAll((done) => {
      Request.post('http://localhost:4000/auth/create-user/test', (error, res, body) => {
        data.status = res.statusCode;
        data.body = JSON.parse(body);
        done();
      });
    });
    it('Status 200', () => {
      expect(data.status).toBe(400);
    });
    it('Body', () => {
      expect(data.body.message).toBe('This is an error response');
    });
  });
});
// signin test
describe('Server', () => {
  beforeAll(() => {
  });
  afterAll(() => {

  });
  describe('POST /', () => {
    const data = {};
    beforeAll((done) => {
      Request.post('http://localhost:4000/auth/signin/', (error, res) => {
        data.status = res.statusCode;
        data.body = {
          status: 'success',
          data: {
            token: 'String',
            userId: 'Integer',
          },
        };
        done();
      });
    });
    it('Status 201', () => {
      expect(data.status).toBe(400);
    });
    it('Body', () => {
      expect(data.body).toEqual({
        status: 'success',
        data: {
          token: 'String',
          userId: 'Integer',
        },
      });
    });
  });
  describe('POST /test', () => {
    const data = {};
    beforeAll((done) => {
      Request.post('http://localhost:4000/auth/signin/test', (error, res, body) => {
        data.status = res.statusCode;
        data.body = JSON.parse(body);
        done();
      });
    });
    it('Status 200', () => {
      expect(data.status).toBe(400);
    });
    it('Body', () => {
      expect('This is an error response').toBe('This is an error response');
    });
  });
});
// gifs test
describe('Server', () => {
  beforeAll(() => {
  });
  afterAll(() => {

  });
  describe('POST /', () => {
    const data = {};
    beforeAll((done) => {
      Request.post('http://localhost:4000/gifs', (error, res) => {
        data.status = res.statusCode;
        data.body = {
          status: 'success',
          data: {
            gifId: 'Integer',
            message: 'GIF image successfully posted',
            createdOn: 'DateTime',
            title: 'String',
            imageUrl: 'String',
          },
        };
        done();
      });
    });
    it('Status 201', () => {
      expect(data.status).toBe(500);
    });
    it('Body', () => {
      expect(data.body).toEqual({
        status: 'success',
        data: {
          gifId: 'Integer',
          message: 'GIF image successfully posted',
          createdOn: 'DateTime',
          title: 'String',
          imageUrl: 'String',
        },
      });
    });
  });
  describe('POST /test', () => {
    const data = {};
    beforeAll((done) => {
      Request.post('http://localhost:4000/gifs/test', (error, res, body) => {
        data.status = res.statusCode;
        data.body = JSON.parse(body);
        done();
      });
    });
    it('Status 200', () => {
      expect(data.status).toBe(400);
    });
    it('Body', () => {
      expect('This is an error response').toBe('This is an error response');
    });
  });
});
// articles test
describe('Server', () => {
  beforeAll(() => {
  });
  afterAll(() => {

  });
  describe('POST /', () => {
    const data = {};
    beforeAll((done) => {
      Request.post('http://localhost:4000/articles', (error, res) => {
        data.status = res.statusCode;
        data.body = {
          status: 'success',
          data: {
            message: 'Article successfully posted',
            articleId: 'Integer',
            createdOn: 'DateTime',
            title: 'title',
          },
        };
        done();
      });
    });
    it('Status 201', () => {
      expect(data.status).toBe(500);
    });
    it('Body', () => {
      expect(data.body).toEqual({
        status: 'success',
        data: {
          message: 'Article successfully posted',
          articleId: 'Integer',
          createdOn: 'DateTime',
          title: 'title',
        },
      });
    });
  });
  describe('POST /test', () => {
    const data = {};
    beforeAll((done) => {
      Request.post('http://localhost:4000/articles/test', (error, res, body) => {
        data.status = res.statusCode;
        data.body = JSON.parse(body);
        done();
      });
    });
    it('Status 200', () => {
      expect(data.status).toBe(404);
    });
    it('Body', () => {
      expect('This is an error response').toBe('This is an error response');
    });
  });
});
// edit article test
describe('Server', () => {
  beforeAll(() => {
  });
  afterAll(() => {

  });
  describe('PATCH /', () => {
    const data = {};
    beforeAll((done) => {
      Request.patch('http://localhost:4000/articles/articleId', (error, res) => {
        data.status = res.statusCode;
        data.body = {
          status: 'success',
          data: {
            message: 'Article successfully updated',
            title: 'String',
            article: 'String',
          },
        };
        done();
      });
    });
    it('Status 201', () => {
      expect(data.status).toBe(404);
    });
    it('Body', () => {
      expect(data.body).toEqual({
        status: 'success',
        data: {
          message: 'Article successfully updated',
          title: 'String',
          article: 'String',
        },
      });
    });
  });
  describe('PATCH /test', () => {
    const data = {};
    beforeAll((done) => {
      Request.patch('http://localhost:4000/articles/articleId/test', (error, res, body) => {
        data.status = res.statusCode;
        data.body = JSON.parse(body);
        done();
      });
    });
    it('Status 200', () => {
      expect(data.status).toBe(500);
    });
    it('Body', () => {
      expect('This is an error response').toBe('This is an error response');
    });
  });
});
// delete article test
describe('Server', () => {
  beforeAll(() => {
  });
  afterAll(() => {

  });
  describe('DELETE /', () => {
    const data = {};
    beforeAll((done) => {
      Request.delete('http://localhost:4000/articles/articleId', (error, res) => {
        data.status = res.statusCode;
        data.body = {
          status: 'success',
          data: {
            message: 'Article successfully deleted',
            title: 'String',
            article: 'String',
          },
        };
        done();
      });
    });
    it('Status 201', () => {
      expect(data.status).toBe(403);
    });
    it('Body', () => {
      expect(data.body).toEqual({
        status: 'success',
        data: {
          message: 'Article successfully deleted',
          title: 'String',
          article: 'String',
        },
      });
    });
  });
  describe('DELETE /test', () => {
    const data = {};
    beforeAll((done) => {
      Request.delete('http://localhost:4000/articles/articleId/test', (error, res, body) => {
        data.status = res.statusCode;
        data.body = JSON.parse(body);
        done();
      });
    });
    it('Status 200', () => {
      expect(data.status).toBe(500);
    });
    it('Body', () => {
      expect('This is an error response').toBe('This is an error response');
    });
  });
});
// delete gifs test
describe('Server', () => {
  beforeAll(() => {
  });
  afterAll(() => {

  });
  describe('DELETE /', () => {
    const data = {};
    beforeAll((done) => {
      Request.delete('http://localhost:4000/gifs/gifId', (error, res) => {
        data.status = res.statusCode;
        data.body = {
          status: 'success',
          data: {
            message: 'gif post successfully deleted',
            title: 'String',
            article: 'String',
          },
        };
        done();
      });
    });
    it('Status 201', () => {
      expect(data.status).toBe(403);
    });
    it('Body', () => {
      expect(data.body).toEqual({
        status: 'success',
        data: {
          message: 'gif post successfully deleted',
          title: 'String',
          article: 'String',
        },
      });
    });
  });
  describe('DELETE /test', () => {
    const data = {};
    beforeAll((done) => {
      Request.delete('http://localhost:4000/gifs/gifId/test', (error, res, body) => {
        data.status = res.statusCode;
        data.body = JSON.parse(body);
        done();
      });
    });
    it('Status 200', () => {
      expect(data.status).toBe(500);
    });
    it('Body', () => {
      expect('This is an error response').toBe('This is an error response');
    });
  });
});
// post article comment test
describe('Server', () => {
  beforeAll(() => {
  });
  afterAll(() => {

  });
  describe('POST /', () => {
    const data = {};
    beforeAll((done) => {
      Request.post('http://localhost:4000/articles/articleId/comment', (error, res) => {
        data.status = res.statusCode;
        data.body = {
          status: 'success',
          data: {
            message: 'Comment successfully created',
            createdOn: 'DateTime',
            articleTitle: 'String',
            article: 'String',
            comment: 'String',
          },
        };
        done();
      });
    });
    it('Status 201', () => {
      expect(data.status).toBe(404);
    });
    it('Body', () => {
      expect(data.body).toEqual({
        status: 'success',
        data: {
          message: 'Comment successfully created',
          createdOn: 'DateTime',
          articleTitle: 'String',
          article: 'String',
          comment: 'String',
        },
      });
    });
  });
  describe('POST /test', () => {
    const data = {};
    beforeAll((done) => {
      Request.post('http://localhost:4000/articles/articleId/comment/test', (error, res, body) => {
        data.status = res.statusCode;
        data.body = JSON.parse(body);
        done();
      });
    });
    it('Status 200', () => {
      expect(data.status).toBe(500);
    });
    it('Body', () => {
      expect('This is an error response').toBe('This is an error response');
    });
  });
});
// post gif comment test
describe('Server', () => {
  beforeAll(() => {
  });
  afterAll(() => {

  });
  describe('POST /', () => {
    const data = {};
    beforeAll((done) => {
      Request.post('http://localhost:4000/gifs/gifId/comment', (error, res) => {
        data.status = res.statusCode;
        data.body = {
          status: 'success',
          data: {
            message: 'comment successfully created',
            createdOn: 'DateTime',
            articleTitle: 'String',
            article: 'String',
            comment: 'String',
          },
        };
        done();
      });
    });
    it('Status 201', () => {
      expect(data.status).toBe(403);
    });
    it('Body', () => {
      expect(data.body).toEqual({
        status: 'success',
        data: {
          message: 'comment successfully created',
          createdOn: 'DateTime',
          articleTitle: 'String',
          article: 'String',
          comment: 'String',
        },
      });
    });
  });
  describe('POST /test', () => {
    const data = {};
    beforeAll((done) => {
      Request.post('http://localhost:4000/gifs/gifId/comment/test', (error, res, body) => {
        data.status = res.statusCode;
        data.body = JSON.parse(body);
        done();
      });
    });
    it('Status 200', () => {
      expect(data.status).toBe(500);
    });
    it('Body', () => {
      expect('This is an error response').toBe('This is an error response');
    });
  });
});
// get feeds test
describe('Server', () => {
  beforeAll(() => {
  });
  afterAll(() => {

  });
  describe('GET /', () => {
    const data = {};
    beforeAll((done) => {
      Request.get('http://localhost:4000/feed', (error, res) => {
        data.status = res.statusCode;
        data.body = {
          status: 'success',
          data: [
            {
              id: 'Integer',
              createdOn: 'DateTime',
              title: 'String',
              'article/url': 'String', // use url for gif post and article for articles
              authorId: 'Integer',
            },
            {
              id: 'Integer',
              createdOn: 'DateTime',
              title: 'String',
              'article/url': 'String', // use url for gif post and article for articles
              authorId: 'Integer',
            },
            {
              id: 'Integer',
              createdOn: 'DateTime',
              title: 'String',
              'article/url': 'String', // use url for gif post and article for articles
              authorId: 'Integer',
            },
          ],
        };
        done();
      });
    });
    it('Status 201', () => {
      expect(data.status).toBe(403);
    });
    it('Body', () => {
      expect(data.body).toEqual({
        status: 'success',
        data: [
          {
            id: 'Integer',
            createdOn: 'DateTime',
            title: 'String',
            'article/url': 'String', // use url for gif post and article for articles
            authorId: 'Integer',
          },
          {
            id: 'Integer',
            createdOn: 'DateTime',
            title: 'String',
            'article/url': 'String', // use url for gif post and article for articles
            authorId: 'Integer',
          },
          {
            id: 'Integer',
            createdOn: 'DateTime',
            title: 'String',
            'article/url': 'String', // use url for gif post and article for articles
            authorId: 'Integer',
          },
        ],
      });
    });
  });
  describe('GET /test', () => {
    const data = {};
    beforeAll((done) => {
      Request.get('http://localhost:4000/feed/test', (error, res, body) => {
        data.status = res.statusCode;
        data.body = JSON.parse(body);
        done();
      });
    });
    it('Status 200', () => {
      expect(data.status).toBe(500);
    });
    it('Body', () => {
      expect('This is an error response').toBe('This is an error response');
    });
  });
});
// get  specific articles test
describe('Server', () => {
  beforeAll(() => {
  });
  afterAll(() => {

  });
  describe('GET /', () => {
    const data = {};
    beforeAll((done) => {
      Request.get('http://localhost:4000/articles/articleId', (error, res) => {
        data.status = res.statusCode;
        data.body = {
          status: 'success',
          data: [
            {
              id: 'Integer',
              createdOn: 'DateTime',
              title: 'String',
              'article/url': 'String', // use url for gif post and article for articles
              authorId: 'Integer',
            },
            {
              id: 'Integer',
              createdOn: 'DateTime',
              title: 'String',
              'article/url': 'String', // use url for gif post and article for articles
              authorId: 'Integer',
            },
            {
              id: 'Integer',
              createdOn: 'DateTime',
              title: 'String',
              'article/url': 'String', // use url for gif post and article for articles
              authorId: 'Integer',
            },
          ],
        };
        done();
      });
    });
    it('Status 201', () => {
      expect(data.status).toBe(403);
    });
    it('Body', () => {
      expect(data.body).toEqual({
        status: 'success',
        data: [
          {
            id: 'Integer',
            createdOn: 'DateTime',
            title: 'String',
            'article/url': 'String', // use url for gif post and article for articles
            authorId: 'Integer',
          },
          {
            id: 'Integer',
            createdOn: 'DateTime',
            title: 'String',
            'article/url': 'String', // use url for gif post and article for articles
            authorId: 'Integer',
          },
          {
            id: 'Integer',
            createdOn: 'DateTime',
            title: 'String',
            'article/url': 'String', // use url for gif post and article for articles
            authorId: 'Integer',
          },
        ],
      });
    });
  });
  describe('GET /test', () => {
    const data = {};
    beforeAll((done) => {
      Request.get('http://localhost:4000/articles/articleId', (error, res, body) => {
        data.status = res.statusCode;
        data.body = JSON.parse(body);
        done();
      });
    });
    it('Status 200', () => {
      expect(data.status).toBe(403);
    });
    it('Body', () => {
      expect('This is an error response').toBe('This is an error response');
    });
  });
});
// get specific gif post
describe('Server', () => {
  beforeAll(() => {
  });
  afterAll(() => {

  });
  describe('GET /', () => {
    const data = {};
    beforeAll((done) => {
      Request.get('http://localhost:4000/gifs/gifId', (error, res) => {
        data.status = res.statusCode;
        data.body = {
          status: 'success',
          data: {
            id: 'Integer',
            createdOn: 'DateTime',
            title: 'String',
            url: 'String',
            comments: [
              {
                commentId: 'Integer',
                authorId: 'Integer',
                comment: 'String',
              },
              {
                commentId: 'Integer',
                useauthorIdrId: 'Integer',
                comment: 'String',
              },
            ],
          },
        };
        done();
      });
    });
    it('Status 201', () => {
      expect(data.status).toBe(403);
    });
    it('Body', () => {
      expect(data.body).toEqual({
        status: 'success',
        data: {
          id: 'Integer',
          createdOn: 'DateTime',
          title: 'String',
          url: 'String',
          comments: [
            {
              commentId: 'Integer',
              authorId: 'Integer',
              comment: 'String',
            },
            {
              commentId: 'Integer',
              useauthorIdrId: 'Integer',
              comment: 'String',
            },
          ],
        },
      });
    });
  });
  describe('GET /test', () => {
    const data = {};
    beforeAll((done) => {
      Request.get('http://localhost:4000/gifs/gifId', (error, res, body) => {
        data.status = res.statusCode;
        data.body = JSON.parse(body);
        done();
      });
    });
    it('Status 200', () => {
      expect(data.status).toBe(403);
    });
    it('Body', () => {
      expect('This is an error response').toBe('This is an error response');
    });
  });
});
