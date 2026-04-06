export default class PrismaAuthRepository {
  constructor({ prisma }) {
    this.prisma = prisma;
  }

  async findById(id) {
    return this.prisma.auths.findUnique({
      where: { id },
    });
  }

  async create(data) {
    return this.prisma.auths.create({ data });
  }
}
